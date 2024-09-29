// File: /pages/api/users.ts (or /app/api/users/route.ts)
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../server/db"; // Import your database connection
import { users } from "../../../server/db/schema"; // Import your users table schema
import type { addUser } from "~/types/loginDetails";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { email, verified } = req.body as addUser;
    const password = generatePassword();
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      
      await db.insert(users).values({
        email,
        role: "User",
        verified,
        password: hashedPassword,
      });
      if (verified === "verified") await sendEmail(email, password);
      return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error("Error inserting user:", error);
      return res.status(500).json({ error: "Failed to create user" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
}
function generatePassword() {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const getRandomChar = (str: string) =>
    str[Math.floor(Math.random() * str.length)];

  const password = [
    getRandomChar(lowercase),
    getRandomChar(uppercase),
    getRandomChar(digits),
    getRandomChar(specialChars),
  ];

  // Add random characters to fill up the remaining length
  const allChars = lowercase + uppercase + digits + specialChars;

  for (let i = password.length; i <= 8; i++) {
    password.push(getRandomChar(allChars));
  }
  return password.sort(() => Math.random() - 0.5).join("");
}

async function sendEmail(to: string, password: string) {
  // const { to, subject, message } = req.body;
  const subject = "password for AkC login";
  const message = "password : " + password;
  // Configure the transporter (use your own SMTP or email service provider credentials)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "kaushikshah1309@gmail.com", // Your email address
      pass: "hfne zsms dvpl mwek", // Your email password (use App Password for Gmail)
    },
  });

  // Configure the email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text: message,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    // return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

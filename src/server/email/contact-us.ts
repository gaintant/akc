"use server";

import nodemailer from "nodemailer";
import { join } from "path";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.eu",
  service: "smtp.zoho.eu",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendContactUsEmail({
  fullName,
  phone,
  email,
  message,
  subject,
}: {
  fullName: string;
  phone?: string;
  email: string;
  message: string;
  subject: string;
}) {
  const emailBody = `
  <p>Received the following inquiry:</p><br />
  <div>Fullname: ${fullName}</div>
  <div>Phone: ${phone}</div>
  <div>Email: ${email}</div>
  <div>Message: ${message}</div><br /><br />
  <div>Sporty Greetings,</div>
  <div>Athletics Kids Cup Team</div><br />
  <img src="cid:akcLogo" width="180" height="35.58" />
`;
  await transporter.sendMail({
    from: `"${process.env.EMAIL_DISPLAY_NAME}" <${process.env.EMAIL_USER}>`,
    to: `"${process.env.EMAIL_DISPLAY_NAME}" <${process.env.EMAIL_USER}>`,
    subject: subject,
    html: emailBody,
    attachments: [
      {
        filename: "/images/AKCLogo_ALt.png",
        path: join(process.cwd(), "public", "images", "AKCLogo_ALt.png"),
        cid: "akcLogo",
      },
    ],
  });

  console.log("contact us email sent to self");
}

export async function sendEmailForContactUs(fullName: string, email: string) {
  const emailBody = `
  <div>Dear ${fullName},</div><br />
  <p>Thank you for reaching out to us and showing your interest in the Athletics Kids Cup (AKC).</p>
  <p>We have received your query and will review it shortly to provide you with the desired information.</p>
  <p>In the meantime, we encourage you to visit our website <a href="https://athleticskidscup.com">athleticskidscup.com</a> for additional information and updates about the event.</p></br>
  <div>Sporty Greetings,</div>
  <div>Athletics Kids Cup Team</div><br />
  <img src="cid:akcLogo" width="180" height="35.58" />
`;
  await transporter.sendMail({
    from: `"${process.env.EMAIL_DISPLAY_NAME}" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Thank You for Contacting the Athletics Kids Cup!",
    html: emailBody,
    attachments: [
      {
        filename: "/images/AKCLogo_ALt.png",
        path: join(process.cwd(), "public", "images", "AKCLogo_ALt.png"),
        cid: "akcLogo",
      },
    ],
  });

  console.log("contact us email sent to inquirer", email);
}

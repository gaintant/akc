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

export async function sendPreRegistrationEmailToSelf(formData: FormData) {
  const emailBody = `
  <p>Hi,</p><br />
  <p>Received pre-registration info from ${formData.get("SchoolName") as string}.</p><br/><br/>
  <div>Sporty Greetings,</div>
  <div>Athletics Kids Cup Team</div><br />
  <img src="cid:akcLogo" width="180" height="35.58" />
`;

  await transporter.sendMail({
    from: `"${process.env.EMAIL_DISPLAY_NAME}" <${process.env.EMAIL_USER}>`,
    to: `"${process.env.EMAIL_DISPLAY_NAME}" <${process.env.EMAIL_USER}>`,
    subject: "Pre-registration completed!",
    html: emailBody,
    attachments: [
      {
        filename: "/images/AKCLogo_ALt.png",
        path: join(process.cwd(), "public", "images", "AKCLogo_ALt.png"),
        cid: "akcLogo",
      },
    ],
  });

  console.log("pre-registration email sent to self");
}

export async function sendPreRegistrationEmail(email: string, schoolName: string) {
  const emailBody = `
  <div>Dear ${schoolName},</div><br />

  <p>Thank you for your interest and for taking the time to provide us with your details.</p>

  <p>We have successfully received your pre-registration for the upcoming Athletics Kids Cup (AKC). We will get back to you soon with the necessary details to help you organize the AKC at your school.</p>

  <div>We encourage you to visit our website <a href="https://athleticskidscup.com">athleticskidscup.com</a> for additional information and updates about the event. If you have any questions or need further assistance, feel free to contact us at <a href="mailto:contact@athleticskidscup.com">contact@athleticskidscup.com</a> or <a href="tel:+9109321591799">09321591799</a>.</p>

  <p>Than you once again for your participation. We look forward to seeing the young athletes from ${schoolName} showcase their talents and sportsmanship at the AKC!</p><br /></br>

  <div>Sporty Greetings,</div>
  <div>Athletics Kids Cup Team</div><br />
  <img src="cid:akcLogo" width="180" height="35.58" />
`;

  await transporter.sendMail({
    from: `"${process.env.EMAIL_DISPLAY_NAME}" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Thank You for Pre-Registering for the Athletics Kids Cup!",
    html: emailBody,
    attachments: [
      {
        filename: "/images/AKCLogo_ALt.png",
        path: join(process.cwd(), "public", "images", "AKCLogo_ALt.png"),
        cid: "akcLogo",
      },
    ],
  });

  console.log("pre-registration email sent to school", schoolName, email);
}


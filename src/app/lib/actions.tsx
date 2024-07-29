"use server";
import { z, type ZodError } from "zod";
import validator from "validator";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { pre_registration_data } from "../../server/db/schema";
import nodemailer from "nodemailer";
import { join } from "path";

const FormSchema = z.object({
  id: z.coerce.number(),
  SchoolName: z.string(),
  StreetAddress: z.string(),
  City: z.string(),
  State: z.string(),
  Pincode: z.coerce.number(),
  SchoolWebsite: z.string(),
  FirstName: z.string(),
  Surname: z.string(),
  DaytimeTelephoneNumber: z
    .string()
    .min(10)
    .max(10)
    .refine(validator.isMobilePhone),
  email: z.string(),
  date: z.string(),
});

const connectionString = process.env.DATABASE_URL ?? "";
const client = postgres(connectionString);
const db = drizzle(client);
type PreRegisterState = {
  message: string;
  success: boolean;
  submitted: boolean;
};
export async function createRegistrationData(
  prevState: PreRegisterState,
  formData: FormData,
) {
  "use server";
  const CreateInvoice = FormSchema.omit({ id: true, date: true });
  try {
    const data = CreateInvoice.parse(Object.fromEntries(formData.entries()));

    await db.insert(pre_registration_data).values({
      contactEmail: data.email,
      schoolName: data.SchoolName,
      coordinatorMobileNo: data.DaytimeTelephoneNumber,
      firstName: data.FirstName,
      schoolAddress: data.StreetAddress,
      schoolCity: data.City,
      schoolPincode: data.Pincode.toString(),
      schoolState: data.State,
      schoolWebsite: data.SchoolWebsite,
      surname: data.SchoolWebsite,
    });

    sendEmail(data.email, data.SchoolName);
    sendEmailToSelf(formData);

    return {
      message: `Registration Successful! You'll receive further information via email on ${data.email}.`,
      success: true,
      submitted: true,
    };
  } catch (e) {
    const error = e as ZodError;
    console.error(error);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    if (!error.isEmpty)
      return {
        message:
          "Pre-registration with this email address is already completed.\n Wait for further communication",
        success: false,
        submitted: true,
      };

    return { message: "Something went wrong", success: false, submitted: true };
  }
}

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

export async function sendEmailToSelf(formData: FormData) {
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

  console.log("email sent to self");
}

export async function sendEmail(email: string, schoolName: string) {
  const emailBody = `
  <div>Dear ${schoolName},</div><br />

  <p>Thank you for your interest and for taking the time to provide us with your details.</p>

  <p>We have successfully received your pre-registration for the upcoming Athletics Kids Cup (AKC). We will get back to you soon with the necessary details to help you organize the AKC at your school.</p>

  <div>We encourage you to visit our website <a href="https://www.athleticskidscup.com">www.athleticskidscup.com</a> for additional information and updates about the event. If you have any questions or need further assistance, feel free to contact us at <a href="mailto:contact@athleticskidscup.com">contact@athleticskidscup.com</a> or <a href="tel:+9109321591799">09321591799</a>.</p>

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

  console.log("email sent to school", schoolName, email);
}

export async function sendContactUsEmail(formData: FormData) {
  const emailBody = `
  <p>Received the following inquiry:</p><br />
  <div>Fullname: ${formData.get("Fullname") as string}</div>
  <div>Phone: ${formData.get("Phone") as string}</div>
  <div>Email: ${formData.get("email") as string}</div>
  <div>Message: ${formData.get("Message") as string}</div><br /><br />
  <div>Sporty Greetings,</div>
  <div>Athletics Kids Cup Team</div><br />
  <img src="cid:akcLogo" width="180" height="35.58" />
`;
  await transporter.sendMail({
    from: `"${process.env.EMAIL_DISPLAY_NAME}" <${process.env.EMAIL_USER}>`,
    to: `"${process.env.EMAIL_DISPLAY_NAME}" <${process.env.EMAIL_USER}>`,
    subject: formData.get("Subject") as string,
    html: emailBody,
    attachments: [
      {
        filename: "/images/AKCLogo_ALt.png",
        path: join(process.cwd(), "public", "images", "AKCLogo_ALt.png"),
        cid: "akcLogo",
      },
    ],
  });

  console.log("email sent to self");
}

export async function sendEmailForContactUs(fullName: string, email: string) {
  const emailBody = `
  <div>Dear ${fullName},</div><br />
  <p>Thank you for reaching out to us and showing your interest in the Athletics Kids Cup (AKC).</p>
  <p>We have received your query and will review it shortly to provide you with the desired information.</p>
  <p>In the meantime, we encourage you to visit our website <a href="https://www.athleticskidscup.com">www.athleticskidscup.com</a> for additional information and updates about the event.</p></br>
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

  console.log("email sent to inquirer", email);
}

export async function handleContactUs(formData: FormData){
  "use server";
  try {
    sendEmailForContactUs(formData.get("Fullname") as string, formData.get("email") as string);
    sendContactUsEmail(formData);

    return {
      message: "Message has been sent",
      success: true,
      submitted: true,
    };
  } catch (e) {
    const error = e as ZodError;
    console.error(error);
    return { message: "Something went wrong", success: false, submitted: true };
  }
}

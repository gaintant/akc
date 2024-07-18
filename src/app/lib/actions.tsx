"use server";
import { z, type ZodError } from "zod";
import validator from "validator";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { pre_registration_data } from "../../server/db/schema";
import nodemailer from "nodemailer";

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
  DaylightTelephoneNumber: z
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

export async function createRegistrationData(formData: FormData) {
  "use server";
  const CreateInvoice = FormSchema.omit({ id: true, date: true });
  try {
    const data = CreateInvoice.parse(Object.fromEntries(formData.entries()));
    await sendEmail(data.email, data.FirstName);

    await db.insert(pre_registration_data).values({
      contactEmail: data.email,
      schoolName: data.SchoolName,
      coordinatorMobileNo: data.DaylightTelephoneNumber,
      firstName: data.FirstName,
      schoolAddress: data.StreetAddress,
      schoolCity: data.City,
      schoolPincode: data.Pincode.toString(),
      schoolState: data.State,
      schoolWebsite: data.SchoolWebsite,
      surname: data.SchoolWebsite,
    });
  } catch (e) {
    const error = e as ZodError;
    console.error(error);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    if (!error.isEmpty) return error.format;
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

export async function sendEmail(email: string, firstName: string) {
  const emailBody = `
  <p>Dear ${firstName},</p><br/>

  <div>We are thrilled to inform you that we have successfully received all the details for your pre-registration for the Athletics Kids Cup.</div>

  <div>Thank you for your prompt submission. Stay tuned for further updates and information.</div><br />

  <div>Best regards,</div>
  <div>AKC</div>
`;
  await transporter.sendMail({
    from: `"${process.env.EMAIL_DISPLAY_NAME}" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Successful Pre-Registration for the Athletics Kids Cup!",
    html: emailBody,
  });

  console.log("email sent to", firstName, email);
}

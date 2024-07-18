'use server';
import { z, ZodError } from 'zod';
import validator from 'validator';
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres, { PostgresError } from 'postgres'
import { pre_registration_data } from '../../server/db/schema'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import nodemailer from "nodemailer";

const FormSchema = z.object({
    id: z.coerce.number(),
    SchoolID: z.string(),
    SchoolName: z.string(),
    StreetAddress: z.string(),
    City: z.string(),
    State: z.string(),
    Pincode: z.coerce.number(),
    SchoolWebsite: z.string(),
    FirstName: z.string(),
    Surname: z.string(),
    DaylightTelephoneNumber: z.string().min(10).max(10).refine(validator.isMobilePhone),
    email: z.string(),
    // drop: z.string(),
    date: z.string(),
})

const connectionString = process.env.DATABASE_URL || "";
const client = postgres(connectionString)
const db = drizzle(client);

export async function createRegistrationData(formData: FormData) {
    const CreateInvoice = FormSchema.omit({ id: true, date: true });
    try{
        const data = CreateInvoice.parse(Object.fromEntries(formData.entries()))
        // console.log(data)
        // console.log(formData.get("email"))
        // console.log(data.email)
        await sendVerificationEmail(data.email as string, "abc")
        
        await db.insert(pre_registration_data).values({
            contactEmail: data.email,
            schoolName: data.SchoolName,
            coordinatorMobileNo: data.DaylightTelephoneNumber,
            firstName: data.FirstName,
            schoolAddress: data.StreetAddress,
            schoolCity: data.City,
            schoolId: parseInt(data.SchoolID),
            schoolPincode: data.Pincode,
            schoolState: data.State,
            schoolWebsite: data.SchoolWebsite,
            surname: data.SchoolWebsite,
        })
        // console.log("db line passed")
        revalidatePath('/lib')
        redirect('../home/page');
    }
    catch(e) {
        const error = e as ZodError
        if (!error.isEmpty) return error.format
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

export async function sendVerificationEmail(email: string, token: string) {
  const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/verify-email?token=${token}`;
  console.log(verificationLink)
  await transporter.sendMail({
    from: `"${process.env.EMAIL_DISPLAY_NAME}" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Verify your email",
    html: `Please click <a href="${verificationLink}">here</a> to verify your email.`,
  });

  console.log("email sent to", verificationLink);
}

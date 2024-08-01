import { z } from "zod";

export const ContactUsFormSchema = z.object({
  Fullname: z.string().min(1),
  Phone: z.string().optional(),
  email: z.string(),
  Subject: z.string().min(1),
  Message: z.string().min(1),
});

export type ContactUsForm = z.infer<typeof ContactUsFormSchema>;

export const PreRegistrationFormSchema = z.object({
  SchoolName: z.string(),
  StreetAddress: z.string(),
  City: z.string(),
  State: z.string(),
  Pincode: z.string().length(6).regex(/^\d+$/).transform(Number),
  SchoolWebsite: z.string(),
  FirstName: z.string().regex(/^[A-Za-z]+$/),
  Surname: z.string().regex(/^[A-Za-z]+$/),
  DaytimeTelephoneNumber: z.string().regex(/^\d+$/).min(8).max(10),
  email: z.string(),
});

export type PreRegistrationForm = z.infer<typeof PreRegistrationFormSchema>;

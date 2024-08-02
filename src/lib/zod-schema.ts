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
  SchoolName: z.string().min(1),
  StreetAddress: z.string().min(1),
  City: z.string().min(1),
  State: z.string().min(1),
  Pincode: z.union([
    z.string().length(6).transform(Number),
    z.number().int().gte(100000).lte(999999),
  ]),
  SchoolWebsite: z.string(),
  FirstName: z.string().regex(/^[A-Za-z]+$/),
  Surname: z.string().regex(/^[A-Za-z]+$/),
  DaytimeTelephoneNumber: z.string().regex(/^\d+$/).min(8).max(10),
  email: z.string(),
});

export type PreRegistrationForm = z.infer<typeof PreRegistrationFormSchema>;

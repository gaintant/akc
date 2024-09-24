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
  SchoolName: z.string().min(1, "School name can not be empty"),
  StreetAddress: z.string().min(1, "Street Address can not be empty"),
  City: z.string().min(1, "City can not be empty"),
  State: z.string().min(1, "State can not be empty"),
  Pincode: z
    .string()
    .length(6, "Pincode must be a 6-digit number")
    .transform(Number)
    .or(
      z
        .number()
        .int()
        .gte(100000)
        .lte(999999)
        .refine((val) => val >= 100000 && val <= 999999, {
          message: "Pincode must be a 6-digit number between 100000 and 999999",
        }),
    )
    .refine((val) => val >= 100000 && val <= 999999, {
      message: "Pincode must be a 6-digit number between 100000 and 999999",
    }),
  SchoolWebsite: z.string(),
  FirstName: z
    .string()
    .regex(
      /^[A-Za-z ]+$/,
      "Firstname should contain alphabets or spaces only.",
    ),
  Surname: z
    .string()
    .regex(/^[A-Za-z ]+$/, "Surname should contain alphabets or spaces only."),
  DaytimeTelephoneNumber: z
    .string()
    .regex(/^\d+$/)
    .length(10, "Number should have 10 digits"),
  email: z.string().regex(/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/),
});

export type PreRegistrationForm = z.infer<typeof PreRegistrationFormSchema>;

export const studentSchema = z.object({
  studentId: z.number().optional(),
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  surName: z.string().optional(),
  dateOfBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  gender: z.enum(["Male", "Female"], { required_error: "Gender is required" }),
  guardianName: z.string().min(1, "Guardian name is required"),
  guardianEmail: z.string().email("Invalid email format").optional(),
  guardianPhoneNumber: z
    .string()
    .length(10, "Phone number must be exactly 10 digits")
    .optional(),
  schoolId: z.number(),
});

export type StudentFormValues = z.infer<typeof studentSchema>;
export type Student = z.infer<typeof studentSchema>;

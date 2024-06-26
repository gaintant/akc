'use server';
import { z } from 'zod';

const FormSchema = z.object({
    id: z.string(),
    SchoolID: z.string(),
    SchoolName: z.string(),
    StreetAddress: z.string(),
    City: z.string(),
    State: z.string(),
    Pincode: z.coerce.number(),
    SchoolWebsite: z.string(),
    FirstName: z.string(),
    Surname: z.string(),
    DaylightTelephonenumber: z.coerce.number(),
    date: z.string(),
})

export async function createRegistrationData(formData: FormData) {
    const CreateInvoice = FormSchema.omit({ id: true, date: true });
    const data = CreateInvoice.parse(Object.fromEntries(formData.entries()))
    console.log(data)
    // console.log(typeof data.DaylightTelephonenumber)
}
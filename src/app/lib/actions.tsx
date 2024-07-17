'use server';
import { z } from 'zod';
import validator from 'validator';

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
    DaylightTelephoneNumber: z.coerce.number(),
    email: z.string(),
    // drop: z.string(),
    date: z.string(),
})

export async function createRegistrationData(formData: FormData) {
    const CreateInvoice = FormSchema.omit({ id: true, date: true });
    const data = CreateInvoice.parse(Object.fromEntries(formData.entries()))
    console.log(data)
    console.log(typeof data.DaylightTelephoneNumber)
    console.log(typeof data.Pincode)
}
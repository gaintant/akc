'use server';

export async function createRegistrationData(formData: FormData) {
    const rawFormData =  Object.fromEntries(formData.entries())
    console.log(rawFormData)
}
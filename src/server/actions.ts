"use server";
import { type ZodError } from "zod";

import { sendContactUsEmail, sendEmailForContactUs } from "./email/contact-us";
import {
  sendPreRegistrationEmail,
  sendPreRegistrationEmailToSelf,
} from "./email/pre-registration";
import PreRegistrationService from "./data/pre-registration";
import { type PreRegisterState } from "~/types";
import {
  ContactUsFormSchema,
  PreRegistrationFormSchema,
} from "~/lib/zod-schema";
import ContactUsService from "./data/contact-us";

export async function createRegistrationData(
  _initialState: PreRegisterState,
  formData: FormData,
): Promise<PreRegisterState> {
  try {
    const data = PreRegistrationFormSchema.parse(
      Object.fromEntries(formData.entries()),
    );

    await PreRegistrationService.mutation.add(data);

    sendPreRegistrationEmail(data.email, data.SchoolName).catch((err) => {
      console.error("Error while sending email to school", err);
    });

    sendPreRegistrationEmailToSelf(formData).catch((err) => {
      console.error("Error while sending email to self", err);
    });

    return {
      message: `Registration Successful! You'll receive further information via email on ${data.email}.`,
      success: true,
      submitted: true,
    };
  } catch (e) {
    const error = e as ZodError;
    console.error(error);
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

export async function handleContactUs(contactUsData: unknown) {
  try {
    const result = ContactUsFormSchema.safeParse(contactUsData);

    if (!result.success) {
      const error = result.error.issues
        .map((issue) => {
          return `${issue.path[0]}: ${issue.message}`;
        })
        .join(".");

      return { error: error };
    }

    await ContactUsService.mutation.add(result.data);

    sendEmailForContactUs(
      result.data.Fullname,
      result.data.email,
    ).catch((err) => {
      console.log(
        "Error while sending email to recipient",
        result.data.email,
        err,
      );
    });

    sendContactUsEmail({
      fullName: result.data.Fullname,
      email: result.data.email,
      message: result.data.Message,
      subject: result.data.Subject,
      phone: result.data.Phone,
    }).catch((err) => {
      console.log("Error while sending email to self", err);
    });
  } catch (e) {
    console.error("Error while adding the contact us entry to the database", e);
  }
}

"use server";
import { sendContactUsEmail, sendEmailForContactUs } from "./email/contact-us";
import {
  sendPreRegistrationEmail,
  sendPreRegistrationEmailToSelf,
} from "./email/pre-registration";
import PreRegistrationService from "./data/pre-registration";
import {
  ContactUsFormSchema,
  PreRegistrationFormSchema,
} from "~/lib/zod-schema";
import ContactUsService from "./data/contact-us";

interface ErrorWithDetail {
  detail: string;
}

function isErrorWithDetail(error: unknown): error is ErrorWithDetail {
  return (
    typeof error === 'object' &&
    error !== null &&
    'detail' in error &&
    typeof (error as ErrorWithDetail).detail === 'string'
  );
}

export async function createRegistrationData(preRegistrationData: unknown) {
  try {
    const result = PreRegistrationFormSchema.safeParse(preRegistrationData);

    if (!result.success) {
      const error = result.error.issues
        .map((issue) => {
          return `${issue.path[0]}: ${issue.message}`;
        })
        .join(".");

      return { error: error };
    }

    await PreRegistrationService.mutation.add(result.data);

    sendPreRegistrationEmail(result.data.email, result.data.SchoolName).catch(
      (err) => {
        console.error(
          "Error while sending pre-registration email to school",
          err,
        );
      },
    );

    sendPreRegistrationEmailToSelf(result.data.SchoolName).catch((err) => {
      console.error("Error while sending pre-registration email to self", err);
    });
  } catch (e) {
    console.error(
      "Error while adding the pre-registration entry to the database",
      e,
    );

    if (isErrorWithDetail(e) && e.detail.includes("already exists")) {
      return {
        error: `Pre-registration with this email already completed!`,
      };
    }

    return {
      error: `Something went wrong! Please try again later!`,
    };
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

    sendEmailForContactUs(result.data.Fullname, result.data.email).catch(
      (err) => {
        console.log(
          "Error while sending email to recipient",
          result.data.email,
          err,
        );
      },
    );

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
    return {
      error: `Something went wrong! ${e as string} Please try again later!`,
    };
  }
}

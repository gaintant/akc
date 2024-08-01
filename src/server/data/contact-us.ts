import { type ContactUsForm } from "~/lib/zod-schema";
import { db } from "../db";
import { contactUsData } from "../db/schema";

const ContactUsService = {
  query: {},
  mutation: {
    add: async (data: ContactUsForm) => {
      await db.insert(contactUsData).values({
        fullName: data.Fullname,
        phone: data.Phone,
        email: data.email,
        subject: data.Subject,
        message: data.Message,
      });
    },
  },
};

export default ContactUsService;

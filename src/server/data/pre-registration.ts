import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { pre_registration_data } from "../db/schema";
import { PreRegistrationData } from "~/types";

const connectionString = process.env.DATABASE_URL ?? "";
const client = postgres(connectionString);
const db = drizzle(client);

const PreRegistrationService = {
  query: {},
  mutation: {
    add: async (data: PreRegistrationData) => {
      await db.insert(pre_registration_data).values({
        contactEmail: data.email,
        schoolName: data.SchoolName,
        coordinatorMobileNo: data.DaytimeTelephoneNumber,
        firstName: data.FirstName,
        schoolAddress: data.StreetAddress,
        schoolCity: data.City,
        schoolPincode: data.Pincode.toString(),
        schoolState: data.State,
        schoolWebsite: data.SchoolWebsite,
        surname: data.SchoolWebsite,
      });
    },
  },
};

export default PreRegistrationService;

import { type Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schema.ts",
  out: "./src/server/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgres://postgres:Lifestain@123@localhost:5433/postgres",
  },
  verbose: true,
  strict: true,
  tablesFilter: ["akc_*"],
} satisfies Config;

import { InferInsertModel } from "drizzle-orm";
import {
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  integer,
  boolean,
  date,
  decimal,
  text,
  unique,
  uuid,
  primaryKey,
  pgEnum,
  pgTable,
} from "drizzle-orm/pg-core";

// Prefixing table names with 'akc_'
const createTable = pgTableCreator((name) => `akc_dev_${name}`);

export const pre_registration_data = createTable("pre_registration", {
  schoolId: serial("school_id").primaryKey(),
  schoolName: varchar("school_name", { length: 255 }).notNull(),
  schoolAddress: text("school_address"),
  schoolCity: varchar("school_city", { length: 255 }),
  schoolState: varchar("school_state", { length: 255 }),
  schoolPincode: varchar("school_pincode", { length: 6 }),
  schoolWebsite: varchar("school_website", { length: 255 }),
  firstName: varchar("firstname", { length: 255 }),
  surname: varchar("surname", { length: 255 }),
  coordinatorMobileNo: varchar("coordinator_mobile_no", { length: 10 }),
  contactEmail: varchar("contact_email", { length: 255 }).unique(),
});

export const contactUsData = createTable("contact_us", {
  id: serial("query_id").primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 10 }),
  email: varchar("email", { length: 255 }),
  subject: varchar("subject", { length: 255 }),
  message: varchar("message", { length: 255 }),
});

// Schools table
export const schools = createTable(
  "schools",
  {
    schoolId: serial("school_id").primaryKey(),
    schoolName: varchar("school_name", { length: 255 }).notNull(),
    principalName: varchar("principal_name", { length: 255 }),
    schoolWebsite: varchar("school_website", { length: 255 }),
    schoolUsername: varchar("school_username", { length: 255 })
      .unique()
      .notNull(),
    schoolType: varchar("school_type", { length: 50 }),
    schoolBoard: varchar("school_board", { length: 50 }),
    schoolMedium: varchar("school_medium", { length: 50 }),
    classFrom: integer("class_from"),
    classUpto: integer("class_upto"),
    schoolSportsDay: date("school_sports_day"),
    noOfParticipants: integer("no_of_participants"),
    hasSportGround: boolean("has_sport_ground"),
    heldAkc: boolean("held_akc"),
    schoolCoordinatorName: varchar("school_coordinator_name", { length: 255 }),
    coordinatorEmail: varchar("coordinator_email", { length: 255 }),
    coordinatorMobileNo: varchar("coordinator_mobile_no", { length: 20 }),
    schoolState: varchar("school_state", { length: 255 }),
    schoolCity: varchar("school_city", { length: 255 }),
    schoolAddress: text("school_address"),
    schoolPincode: varchar("school_pincode", { length: 10 }),
    contactEmail: varchar("contact_email", { length: 255 }),
    passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  },
  (table) => ({
    schoolNameUnique: unique("school_name").on(table.schoolName),
  }),
);

// Students table
export const students = createTable(
  "students",
  {
    studentId: serial("student_id").primaryKey(),
    firstName: varchar("first_Name", { length: 255 }).notNull(),
    middleName: varchar("middle_Name", { length: 255 }),
    surName: varchar("sur_Name", { length: 255 }),
    dateOfBirth: date("date_of_birth").notNull(),
    gender: varchar("gender", { length: 10 }).notNull(),
    guardianName: varchar("guardian_name", { length: 255 }).notNull(),
    guardianEmail: varchar("guardian_email", { length: 255 }),
    guardianPhoneNumber: varchar("guardian_phone_number", { length: 10 }),
    schoolId: integer("school_id")
      .notNull()
      .references(() => pre_registration_data.schoolId, {
        onDelete: "cascade",
      }),
  },
  (table) => ({
    studentUnique: unique("student_school_unique").on(
      table.dateOfBirth,
      table.firstName,
    ),
  }),
);

// Events table
export const events = createTable("events", {
  eventId: serial("event_id").primaryKey(),
  location: varchar("location", { length: 255 }).notNull(),
  eventDate: date("event_date").notNull(),
  eventCoordinatorName: varchar("event_coordinator_name", { length: 255 }),
  eventCoordinatorEmail: varchar("event_coordinator_email", { length: 255 }),
});

// EventSchools table (junction table)
export const eventSchools = createTable(
  "event_schools",
  {
    // eventSchoolId: serial("event_school_id").primaryKey(),
    eventId: integer("event_id")
      .notNull()
      .references(() => events.eventId, {
        onDelete: "cascade",
      }),
    schoolId: integer("school_id")
      .notNull()
      .references(() => schools.schoolId, {
        onDelete: "cascade",
      }),
  },
  (table) => ({
    eventSchoolsUnique: primaryKey({
      columns: [table.eventId, table.schoolId],
    }),
  }),
);

// Results table
export const results = createTable("results", {
  resultId: serial("result_id").primaryKey(),
  eventId: integer("event_id")
    .notNull()
    .references(() => events.eventId, {
      onDelete: "cascade",
    }),
  studentId: integer("student_id")
    .notNull()
    .references(() => students.studentId, {
      onDelete: "cascade",
    }),
  running: boolean("running"),
  runningScore1: decimal("running_score_1", { precision: 10, scale: 2 }),
  runningScore2: decimal("running_score_2", { precision: 10, scale: 2 }),
  runningScore3: decimal("running_score_3", { precision: 10, scale: 2 }),
  bestRunningScore: decimal("best_running_score", { precision: 10, scale: 2 }),
  throwing: boolean("throwing"),
  throwingScore1: decimal("throwing_score_1", { precision: 10, scale: 2 }),
  throwingScore2: decimal("throwing_score_2", { precision: 10, scale: 2 }),
  throwingScore3: decimal("throwing_score_3", { precision: 10, scale: 2 }),
  bestThrowingScore: decimal("best_throwing_score", {
    precision: 10,
    scale: 2,
  }),
  jumping: boolean("jumping"),
  jumpingScore1: decimal("jumping_score_1", { precision: 10, scale: 2 }),
  jumpingScore2: decimal("jumping_score_2", { precision: 10, scale: 2 }),
  jumpingScore3: decimal("jumping_score_3", { precision: 10, scale: 2 }),
  bestJumpingScore: decimal("best_jumping_score", { precision: 10, scale: 2 }),
  akcScore: decimal("akc_score", { precision: 10, scale: 2 }),
});

export const verifiedEnum = pgEnum("verified_status", [
  "pending",
  "verified",
  "rejected",
]);

// Define the users table
export const users = createTable("users", {
  id: serial("id").primaryKey(), // Unique identifier
  email: varchar("email", { length: 256 }).notNull().unique(),
  role: varchar("role", { length: 256 }).notNull(),
  verified: verifiedEnum("pending").notNull(), // Proper usage of enum
  password: varchar("password", { length: 256 }).notNull(),
});

export type NewUser = InferInsertModel<typeof users>;

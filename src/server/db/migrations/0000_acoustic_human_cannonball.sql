CREATE TABLE IF NOT EXISTS "akc_event_schools" (
	"event_id" integer NOT NULL,
	"school_id" integer NOT NULL,
	CONSTRAINT "akc_event_schools_event_id_school_id_pk" PRIMARY KEY("event_id","school_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "akc_events" (
	"event_id" serial PRIMARY KEY NOT NULL,
	"location" varchar(255) NOT NULL,
	"event_date" date NOT NULL,
	"event_coordinator_name" varchar(255),
	"event_coordinator_email" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "akc_refresh_token" (
	"uuid" uuid PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "akc_results" (
	"result_id" serial PRIMARY KEY NOT NULL,
	"event_id" integer NOT NULL,
	"student_id" integer NOT NULL,
	"running" boolean,
	"running_score_1" numeric(10, 2),
	"running_score_2" numeric(10, 2),
	"running_score_3" numeric(10, 2),
	"best_running_score" numeric(10, 2),
	"throwing" boolean,
	"throwing_score_1" numeric(10, 2),
	"throwing_score_2" numeric(10, 2),
	"throwing_score_3" numeric(10, 2),
	"best_throwing_score" numeric(10, 2),
	"jumping" boolean,
	"jumping_score_1" numeric(10, 2),
	"jumping_score_2" numeric(10, 2),
	"jumping_score_3" numeric(10, 2),
	"best_jumping_score" numeric(10, 2),
	"akc_score" numeric(10, 2)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "akc_schools" (
	"school_id" serial PRIMARY KEY NOT NULL,
	"school_name" varchar(255) NOT NULL,
	"principal_name" varchar(255),
	"school_website" varchar(255),
	"school_username" varchar(255) NOT NULL,
	"school_type" varchar(50),
	"school_board" varchar(50),
	"school_medium" varchar(50),
	"class_from" integer,
	"class_upto" integer,
	"school_sports_day" date,
	"no_of_participants" integer,
	"has_sport_ground" boolean,
	"held_akc" boolean,
	"school_coordinator_name" varchar(255),
	"coordinator_email" varchar(255),
	"coordinator_mobile_no" varchar(20),
	"school_state" varchar(255),
	"school_city" varchar(255),
	"school_address" text,
	"school_pincode" varchar(10),
	"contact_email" varchar(255),
	"password_hash" varchar(255) NOT NULL,
	CONSTRAINT "akc_schools_school_username_unique" UNIQUE("school_username"),
	CONSTRAINT "school_name" UNIQUE("school_name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "akc_students" (
	"student_id" serial PRIMARY KEY NOT NULL,
	"school_id" integer NOT NULL,
	"student_name" varchar(255) NOT NULL,
	"date_of_birth" date,
	"grade_level" integer,
	"gender" varchar(10),
	"height" numeric(5, 2),
	"weight" numeric(5, 2),
	"guardian_name" varchar(255),
	"guardian_contact" varchar(20),
	"guardian_alternate_contact" varchar(20),
	CONSTRAINT "student_school_unique" UNIQUE("school_id","student_name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "akc_todo" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar,
	"title" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "akc_user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"email" varchar(256) NOT NULL,
	"role" varchar(256) NOT NULL,
	"password" varchar(256),
	"reset_token" varchar(256),
	"reset_token_expiry" timestamp,
	"email_verified" boolean DEFAULT false,
	"verification_token" varchar(256),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "akc_user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "akc_event_schools" ADD CONSTRAINT "akc_event_schools_event_id_akc_events_event_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."akc_events"("event_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "akc_event_schools" ADD CONSTRAINT "akc_event_schools_school_id_akc_schools_school_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."akc_schools"("school_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "akc_results" ADD CONSTRAINT "akc_results_event_id_akc_events_event_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."akc_events"("event_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "akc_results" ADD CONSTRAINT "akc_results_student_id_akc_students_student_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."akc_students"("student_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "akc_students" ADD CONSTRAINT "akc_students_school_id_akc_schools_school_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."akc_schools"("school_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "akc_pre_registration" (
	"school_id" serial PRIMARY KEY NOT NULL,
	"school_name" varchar(255) NOT NULL,
	"school_website" varchar(255),
	"school_state" varchar(255),
	"school_city" varchar(255),
	"school_address" text,
	"school_pincode" varchar(6),
	"contact_email" varchar(255),
	"coordinator_mobile_no" varchar(10),
	"firstname" varchar(255),
	"surname" varchar(255)
);

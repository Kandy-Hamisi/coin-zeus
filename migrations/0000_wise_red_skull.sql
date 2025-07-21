CREATE TYPE "public"."account_type" AS ENUM('CHECKING', 'SAVINGS', 'CREDIT_CARD', 'CASH', 'INVESTMENT', 'LOAN', 'OTHER');--> statement-breakpoint
CREATE TYPE "public"."budget_period" AS ENUM('WEEKLY', 'MONTHLY', 'QUARTERLY', 'YEARLY');--> statement-breakpoint
CREATE TYPE "public"."frequency" AS ENUM('DAILY', 'WEEKLY', 'BIWEEKLY', 'MONTHLY', 'QUARTERLY', 'YEARLY');--> statement-breakpoint
CREATE TYPE "public"."goal_status" AS ENUM('ACTIVE', 'COMPLETED', 'PAUSED', 'CANCELLED');--> statement-breakpoint
CREATE TYPE "public"."notification_type" AS ENUM('BUDGET_ALERT', 'BILL_REMINDER', 'GOAL_PROGRESS', 'LARGE_EXPENSE', 'SUBSCRIPTION_RENEWAL', 'ACCOUNT_SYNC');--> statement-breakpoint
CREATE TYPE "public"."subscription_status" AS ENUM('ACTIVE', 'CANCELLED', 'PAUSED', 'EXPIRED');--> statement-breakpoint
CREATE TYPE "public"."transaction_type" AS ENUM('EXPENSE', 'INCOME', 'TRANSFER');--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"first_name" varchar(100),
	"last_name" varchar(100),
	"avatar" text,
	"timezone" varchar(50) DEFAULT 'UTC',
	"currency" varchar(3) DEFAULT 'USD',
	"date_format" varchar(20) DEFAULT 'MM/dd/yyyy',
	"first_day_of_week" integer DEFAULT 0,
	"is_email_verified" boolean DEFAULT false,
	"is_premium" boolean DEFAULT false,
	"premium_expires_at" timestamp with time zone,
	"last_login_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);

import {
  pgTable,
  text,
  integer,
  uuid,
  varchar,
  pgEnum,
  date,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";

// Enums
export const TRANSACTION_TYPE_ENUM = pgEnum("transaction_type", [
  "EXPENSE",
  "INCOME",
  "TRANSFER",
]);

export const ACCOUNT_TYPE_ENUM = pgEnum("account_type", [
  "CHECKING",
  "SAVINGS",
  "CREDIT_CARD",
  "CASH",
  "INVESTMENT",
  "LOAN",
  "OTHER",
]);

export const FREQUENCY_ENUM = pgEnum("frequency", [
  "DAILY",
  "WEEKLY",
  "BIWEEKLY",
  "MONTHLY",
  "QUARTERLY",
  "YEARLY",
]);

export const BUDGET_PERIOD_ENUM = pgEnum("budget_period", [
  "WEEKLY",
  "MONTHLY",
  "QUARTERLY",
  "YEARLY",
]);

export const SUBSCRIPTION_STATUS_ENUM = pgEnum("subscription_status", [
  "ACTIVE",
  "CANCELLED",
  "PAUSED",
  "EXPIRED",
]);

export const NOTIFICATION_TYPE_ENUM = pgEnum("notification_type", [
  "BUDGET_ALERT",
  "BILL_REMINDER",
  "GOAL_PROGRESS",
  "LARGE_EXPENSE",
  "SUBSCRIPTION_RENEWAL",
  "ACCOUNT_SYNC",
]);

export const GOAL_STATUS_ENUM = pgEnum("goal_status", [
  "ACTIVE",
  "COMPLETED",
  "PAUSED",
  "CANCELLED",
]);

// Users table
export const users = pgTable("users", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  firstName: varchar("first_name", { length: 100 }),
  lastName: varchar("last_name", { length: 100 }),
  password: text("password"),
  avatar: text("avatar"),
  timezone: varchar("timezone", { length: 50 }).default("UTC"),
  currency: varchar("currency", { length: 3 }).default("USD"),
  dateFormat: varchar("date_format", { length: 20 }).default("MM/dd/yyyy"),
  firstDayOfWeek: integer("first_day_of_week").default(0), // 0 = Sunday
  isEmailVerified: boolean("is_email_verified").default(false),
  isPremium: boolean("is_premium").default(false),
  premiumExpiresAt: timestamp("premium_expires_at", { withTimezone: true }),
  lastLoginAt: timestamp("last_login_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

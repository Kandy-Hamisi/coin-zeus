import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import config from "@/config";

// async function main() {
//   const client = postgres(config.env.databaseUrl);
//   const db = drizzle({ client });
// }
//
// main();

const sql = postgres(config.env.databaseUrl, { prepare: false });
export const db = drizzle({ client: sql });

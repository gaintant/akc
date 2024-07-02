import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const migrationClient = postgres(process.env.DATABASE_URL as string, {
  max: 1,
});

async function main() {
  migrate(drizzle(migrationClient), {
    migrationsFolder: "./src/server/db/migrations",
  });

  await migrationClient.end();
}

main();

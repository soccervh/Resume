import { Pool } from "pg";
import type { Global } from "@remix-run/node";

let db: Pool;

declare global {
  var __db: Pool | undefined;
}

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
if (process.env.NODE_ENV === "production") {
  db = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
} else {
  if (!global.__db) {
    global.__db = new Pool({
      connectionString: "postgresql://resume:resume@localhost:5432/resume",
    });
  }
  db = global.__db;
}

export { db };

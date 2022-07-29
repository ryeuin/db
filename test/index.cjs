import database from "r6nted.db";
const db = new database("db.json");

db.set("key", "not a value");

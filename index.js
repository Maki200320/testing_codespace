const express = require("express");
const Database = require("better-sqlite3");

const app = express();
app.use(express.json());

const db = new Database("todos.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
  
  )
`);
db.exec(`
  CREATE TABLE IF NOT EXISTS todo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tile TEXT NOT NULL,
    note TEXT NOT NULL,
    done INTEGER DEFAULT 0
  )
`);



app.listen(3000, () => console.log("Running on port 3000"));
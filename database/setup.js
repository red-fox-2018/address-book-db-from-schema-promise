const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('address_book.db')

db.serialize(() => {

  db.run(`CREATE TABLE IF NOT EXISTS contacts(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    company VARCHAR,
    phone VARCHAR,
    email VARCHAR
  )`, (err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`success add table "contacts"`);
    }
  })

  db.run(`CREATE TABLE IF NOT EXISTS groups(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR
  )`, (err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`success add table "groups"`);
    }
  })

  db.run(`CREATE TABLE IF NOT EXISTS contact_group(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_contact INTEGER,
    id_group INTEGER
  )`, (err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`success add table "contact_group"`);
    }
  })

})

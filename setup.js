const db = require('./libraries/database');

db.serialize(() => {
  // Create Table Contacts
  db.run(`CREATE TABLE IF NOT EXISTS Contacts 
    (id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name VARCHAR,
    company VARCHAR, 
    email VARCHAR NOT NULL UNIQUE,
    phone VARCHAR NOT NULL UNIQUE);
    `, err => {
    if (!err) {
      console.log(`TABLE Contacts TELAH DIBUAT`);
    } else {
      console.log(err.message);
    }
  });
  // Create Table Groups
  db.run(`CREATE TABLE IF NOT EXISTS Groups 
    (id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name VARCHAR);
    `, err => {
    if (!err) {
      console.log(`TABLE Groups TELAH DIBUAT`);
    } else {
      console.log(err.message);
    }
  });
  // Create Table Contact_Group
  db.run(`CREATE TABLE IF NOT EXISTS Contact_Group
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    contact_id REFERENCES Contacts(id),
    group_id REFERENCES Groups(id));
    `, err => {
    if (!err) {
      console.log(`TABLE Contact_Group TELAH DIBUAT`);
    } else {
      console.log(err.message);
    }
  });
});

db.close();
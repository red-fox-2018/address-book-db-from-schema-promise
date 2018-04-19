const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('address_book.db');

let queryContacts = 'CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, perusahaan TEXT, no_telp TEXT, email TEXT)';
let queryGroups = 'CREATE TABLE IF NOT EXISTS groups (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)';
let queryGroupContacts = 'CREATE TABLE IF NOT EXISTS contact_groups (id INTEGER PRIMARY KEY AUTOINCREMENT, contactId INTEGER, groupId INTEGER, FOREIGN KEY (contactId) REFERENCES contacts(id), FOREIGN KEY (groupId) REFERENCES groups(id))';

db.serialize(() => {
  db.run(queryContacts);
  db.run(queryGroups);
  db.run(queryGroupContacts);
});

db.close();
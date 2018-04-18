let sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('address_book.db')


let queryContact = `CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT,company TEXT, telp INTEGER UNIQUE,email TEXT UNIQUE)`
let queryGroup = `CREATE TABLE IF NOT EXISTS groups (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)`
let queryContactGroup = `CREATE TABLE IF NOT EXISTS contactGroups(id INTEGER PRIMARY KEY AUTOINCREMENT, contactId INTEGER,groupsId INTEGER, FOREIGN KEY (contactId) REFERENCES contact(id), FOREIGN KEY (groupsId) REFERENCES groups(id))`
db.run(queryContact)
db.run(queryGroup)
db.run(queryContactGroup)

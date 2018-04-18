let sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('address_book.db')

let queryDBContact = `CREATE TABLE IF NOT EXISTS contact 
                      (id INTEGER PRIMARY KEY AUTOINCREMENT,
                       name TEXT, 
                       company TEXT, 
                       phone number TEXT UNIQUE, 
                       email TEXT UNIQUE)`

let queryDBContactGroup = `CREATE TABLE IF NOT EXISTS contactGroup 
                           (id INTEGER PRIMARY KEY AUTOINCREMENT,
                            contactId INTEGER, 
                            groupsId INTEGER, 
                            FOREIGN KEY (contactId) REFERENCES contact(id), 
                            FOREIGN KEY (groupsId) REFERENCES groups(id) )`

let queryDBGroup = `CREATE TABLE IF NOT EXISTS groups 
                    (id INTEGER PRIMARY KEY AUTOINCREMENT,
                     name TEXT)`

db.run(queryDBContact)
db.run(queryDBContactGroup)
db.run(queryDBGroup)

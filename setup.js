const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('AddressBook.db')

class Setup{

    static CreateTable(tablename,sql){
        db.run(`CREATE TABLE IF NOT EXISTS ${tablename}(${sql})`)
    }

}

Setup.CreateTable('contacts',`id INTEGER PRIMARY KEY AUTOINCREMENT, 
                               name TEXT NOT NULL UNIQUE, company TEXT, phone TEXT NOT NULL UNIQUE, 
                               email TEXT NOT NULL UNIQUE`)

Setup.CreateTable('groups',`id_group INTEGER PRIMARY KEY AUTOINCREMENT, name_group TEXT`)

// Setup.CreateTable('contact_group',`id INTEGER PRIMARY KEY AUTOINCREMENT, contactsName TEXT, groupName TEXT`)

Setup.CreateTable('contact_group',`id_contact_group INTEGER PRIMARY KEY AUTOINCREMENT, contactId INTEGER, groupId INTEGER`)
                               
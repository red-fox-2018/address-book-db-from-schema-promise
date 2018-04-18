const sqlite = require('sqlite3').verbose()

class Database{

  static db() {
    return new sqlite.Database('databaseContact.db')
  }

  static groupTable() {
    var db = this.db()
    db.run('CREATE TABLE IF NOT EXISTS groups (id INTEGER PRIMARY KEY AUTOINCREMENT, groupName VARCHAR(20))')
  }

  static contactTable() {
    var db = this.db()
    db.run(`CREATE TABLE IF NOT EXISTS contacts
      (id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(20), company VARCHAR(20), phone_number VARCHAR(20),
      email VARCHAR(20),
      CONSTRAINT phone_email)`)
  }

  static groupContactTable() {
    var db = this.db()
    db.run('CREATE TABLE IF NOT EXISTS group_contact (id INTEGER PRIMARY KEY AUTOINCREMENT, contactId INTEGER, groupId INTEGER )')
  }

}

Database.groupTable()
Database.contactTable()
Database.groupContactTable()

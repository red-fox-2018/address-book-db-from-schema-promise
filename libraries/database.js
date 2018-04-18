"use strict"
var sqlite3 = require('sqlite3').verbose();

class Database {
    static db() {
        return new sqlite3.Database('./database/database.db');
    }
}

module.exports = Database.db();
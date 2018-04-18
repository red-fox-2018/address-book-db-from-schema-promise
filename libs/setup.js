/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/
/*jshint -W138*/


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./libs/address_book.db', (err) => {
   if (err) {
      return console.error(err.message);
   }
   console.log('Connected to the in-memory SQlite database.');
});

class Setup {

   static create() {
      db.serialize(function() {
         db.run(`CREATE TABLE IF NOT EXISTS Contacts (
               contact_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
               name VARCHAR NOT NULL,
               company VARCHAR NOT NULL,
               phone_number VARCHAR NOT NULL,
               email VARCHAR NOT NULL
               )`, (err) => {
            if (err) throw err;
            else {
               console.log('Table Contacts created successfully');
            }
         });

         db.run(`CREATE TABLE IF NOT EXISTS Groups (
                group_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                name VARCHAR NOT NULL
                )`, (err) => {
            if (err) throw err;
            else {
               console.log('Table Groups created successfully');
            }
         });
         db.run(`CREATE TABLE IF NOT EXISTS Contact_Groups(
               contact_groups_id INTEGER PRIMARY KEY AUTOINCREMENT,
               contact_id INTEGER NOT NULL,
               group_id INTEGER NOT NULL,
               FOREIGN KEY (contact_id) REFERENCES Voters(contact_id),
               FOREIGN KEY (group_id) REFERENCES Politicians(group_id))`, (err) => {
            if (err) throw err;
            else {
               console.log('Table Contact Group created successfully');
            }
         });
      });
   }
}



Setup.create();


db.close((err) => {
   if (err) {
      return console.error(err.message);
   }
   console.log('Close the database connection.');
});

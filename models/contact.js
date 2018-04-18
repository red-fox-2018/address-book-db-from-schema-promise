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

class ContactModel {

   static add(name, company, phone_number, email) {
      return new Promise((resolve, reject) => {
         if (phone_number.length > 13) {
            resolve('phone_number is not valid');
         } else {
            let validNumber = '0123456789';
            for (let i = 0; i < phone_number.length; i++) {
               let count = 0;
               for (let j = 0; j < validNumber.length; j++) {
                  if (phone_number[i] == validNumber[j]) {
                     count++;
                  }
               }
               if (count == 0) {
                  resolve('phone_number is not valid');
               }
            }
            db.run(`INSERT INTO Contacts (contact_id, name, company, phone_number, email)
                  VALUES (null, '${name}', '${company}', '${phone_number}', '${email}');`, (err) => {
               if (err) {
                  reject(err);
               } else {
                  resolve('Table Contacts added successfully');
               }
            });
         }

         db.close((err) => {
            if (err) {
               return console.error(err.message);
            }
            console.log('Close the database connection.');
         });
      });
   }

   static update(column, input, contact_id) {
      return new Promise((resolve, reject) => {
         db.run(`UPDATE Contacts SET '${column}' = '${input}'
                                WHERE contact_id = ${contact_id};`, (err) => {
            if (err) {
               reject(err);
            } else {
               resolve('Table Contacts updated successfully');
            }
         });

         db.close((err) => {
            if (err) {
               return console.error(err.message);
            }
            console.log('Close the database connection.');
         });
      });
   }

   static findById(contactName) {
      return new Promise((resolve, reject) => {
         db.get(`SELECT contact_id FROM Contacts WHERE name = '${contactName}';`, (err, contact) => {
            if (err) {
               reject(err);
            } else {
               db.all(`SELECT * FROM Contacts WHERE contact_id = ${contact.contact_id};`, (err, data) => {
                  if (err) {
                     reject(err);
                  } else {
                     resolve(data);
                  }
               });
            }
         });

         db.close((err) => {
            if (err) {
               return console.error(err.message);
            }
            console.log('Close the database connection.');
         });
      });
   }

   static delete(contact_id) {
      return new Promise((resolve, reject) => {
         db.run(`DELETE FROM Contacts WHERE contact_id = ${contact_id};`, (err) => {
            if (err) {
               reject(err);
            } else {
               resolve('Table Contacts deleted successfully');
            }
         });

         db.close((err) => {
            if (err) {
               return console.error(err.message);
            }
            console.log('Close the database connection.');
         });
      });
   }

   static show() {
      return new Promise((resolve, reject) => {
         db.all(`SELECT Contacts.contact_id, Contacts.name, company, phone_number, email, gabungGroup.name AS groupName FROM Contacts
                 LEFT JOIN (SELECT Groups.name, Contact_Groups.contact_id FROM Groups
                 JOIN Contact_Groups ON Groups.group_id = Contact_Groups.group_id) AS gabungGroup
                 ON gabungGroup.contact_id = Contacts.contact_id
                 ORDER BY gabungGroup.name ASC;`, (err, dataRows) => {
            if (err) {
               reject(err);
            } else {
               resolve(dataRows);
            }
         });

         db.close((err) => {
            if (err) {
               return console.error(err.message);
            }
            console.log('Close the database connection.');
         });
      });
   }
}

module.exports = ContactModel;

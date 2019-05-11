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
         let validationEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
         let validationNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
         if (!validationEmail.test(email)) {
            resolve('Email is not valid, Please provide a valid email with symbol @ and .');
         } else if (!validationNumber.test(phone_number) || phone_number.length > 13) {
            resolve('Phone number is not valid, Please provide a valid phone number with 12 digit and number only');
         } else {
            db.all(`SELECT * FROM Contacts;`, (err, data) => {
               if (err) {
                  reject(err);
               } else {
                  let isValid = false;
                  for (let i = 0; i < data.length; i++) {
                     if (data[i].phone_number == phone_number) {
                        isValid = true;
                        resolve('Phone number not unique');
                     } else if (data[i].email == email) {
                        isValid = true;
                        resolve('Email not unique');
                     }
                  }
                  if (isValid == false) {
                     db.run(`INSERT INTO Contacts (contact_id, name, company, phone_number, email)
                            VALUES (null, '${name}', '${company}', '${phone_number}', '${email}');`, (err) => {
                        if (err) {
                           reject(err);
                        } else {
                           resolve('Table Contacts added successfully');
                        }
                     });
                  }
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

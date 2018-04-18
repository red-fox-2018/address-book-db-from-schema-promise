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


class ContactGroupModel {

   static add(contactName, groupName) {
      return new Promise((resolve, reject) => {
         db.get(`SELECT contact_id FROM Contacts WHERE name = '${contactName}';`, (err, contact) => {
            if (err) {
               reject(err);
            } else {
               db.get(`SELECT group_id FROM Groups WHERE name = '${groupName}';`, (err, group) => {
                  if (err) {
                     reject(err);
                  } else {
                     db.run(`INSERT INTO Contact_Groups (contact_groups_id, contact_id, group_id) VALUES (
                    null, '${contact.contact_id}', '${group.group_id}')`, (err) => {
                        if (err) {
                           reject(err);
                        } else {
                           resolve('Table Contact_Groups created successfully');
                        }
                     });
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


   static update(contactName, groupName, contact_groups_id) {
      return new Promise((resolve, reject) => {
         db.get(`SELECT contact_id FROM Contacts WHERE name = '${contactName}';`, (err, contact) => {
            db.get(`SELECT group_id FROM Groups WHERE name = '${groupName}';`, (err, group) => {
               db.run(`UPDATE Contact_Groups SET contact_id = ${contact.contact_id},
                                                   group_id = ${group.group_id}
                                    WHERE contact_groups_id = ${contact_groups_id};`, (err) => {
                  if (err) {
                     reject(err);
                  } else {
                     resolve('Table Contact_Groups updated successfully');
                  }
               });
            });
         });

         db.close((err) => {
            if (err) {
               return console.error(err.message);
            }
            console.log('Close the database connection.');
         });
      });
   }

   static delete(contact_groups_id) {
      return new Promise((resolve, reject) => {
         db.run(`DELETE FROM Contact_Groups WHERE contact_groups_id = ${contact_groups_id};`, (err) => {
            if (err) {
               reject(err);
            } else {
               resolve('Table Contact_Groups deleted successfully');
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

module.exports = ContactGroupModel;

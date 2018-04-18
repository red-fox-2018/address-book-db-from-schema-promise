"use strict"
const db = require('../libraries/database');

class ContactGroup {
  static addContact(groupName, contactName) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT id FROM Groups WHERE name = '${groupName}';`, (err, group) => {
        db.get(`SELECT id FROM Contacts WHERE name = '${contactName}';`, (err, contact) => {
          let query = `INSERT into Contact_Group
                     VALUES (NULL, '${contact.id}', '${group.id}');`;
          let statusMessage = `${contactName} has been added to the ${groupName} group`;
          db.run(query, err => {
            if (!err) {
              resolve(statusMessage);
            } else {
              reject(err);
            }
          })
        })
      })
    })
  }

  static deleteGroup(id) {
    let queryDelete = `DELETE FROM Contact_Group 
                       WHERE (SELECT id FROM Groups WHERE id = ${id}) = group_id;`;
    let statusMessage = `Rows has been delete by group id ${id}`;
    return new Promise((resolve, reject) => {
      db.run(queryDelete, err => {
        if (!err) {
          resolve(statusMessage);
        } else {
          reject(err);
        }
      })
    })
  }
}

module.exports = ContactGroup;
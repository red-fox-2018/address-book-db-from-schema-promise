"use strict"
const db = require('../libraries/database');

class Contact {
  static getData() {
    let query = `SELECT * FROM Contacts;`;

    return new Promise((resolve, reject) => {
      db.all(query, (err, rows) => {
        if (!err) {
          resolve(rows);
        } else {
          reject(err);
        }
      })
    })
  }

  static save(name, company, email, phone) {
    let query = `INSERT INTO Contacts
                 VALUES (NULL, '${name}', '${company}', '${email}', '${phone}');`;
    let statusMessage = `${name} has added to the contact`;

    return new Promise((resolve, reject) => {
      db.run(query, err => {
        if (!err) {
          resolve(statusMessage);
        } else {
          reject(err);
        }
      })
    })
  }

  static update(column, value, id) {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM Contacts WHERE id = ${id};`, (err, rows) => {
        let statusMessage;
        if (rows.length === 0) {
          statusMessage = `There is no contact with id ${id}`;
          resolve(statusMessage);
        } else {
          let query = `UPDATE Contacts
                     SET ${column} = '${value}'
                     WHERE id = ${id};`;

          db.run(query, err => {
            if (err) {
              reject(err);
            } else {
              statusMessage = `The contact with id ${id} has been updated`;
            }

            resolve(statusMessage);
          })
        }
      })
    })
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM Contacts WHERE id = ${id};`, (err, rows) => {
        let statusMessage;

        if (rows.length === 0) {
          statusMessage = `There is no contact with id ${id}`;
          resolve(statusMessage);
        } else {
          let queryDelete = `DELETE FROM Contacts
                           WHERE id = ${id};`;

          db.run(queryDelete, err => {
            if (err) {
              reject(err);
            } else {
              statusMessage = `The contact with id ${id} has been deleted`;
            }

            resolve(statusMessage);
          })
        }
      })
    })
  }
}

module.exports = Contact;
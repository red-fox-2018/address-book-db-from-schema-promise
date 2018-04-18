
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address-book-promise.db');

class ContactsModel {
  static addOne(name, company, phone, email) {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO Contacts VALUES (null, ?, ?, ?, ?)`, name, company, phone, email, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(1);
        }
      });
    });
  }
  static getAll() {
    return new Promise((resolve, reject) => {
      let sqlContacts =
      `SELECT
        Contacts.name,
        Contacts.email,
        Contacts.phone,
        GroupContacts.groupName
        FROM Contacts
        LEFT JOIN GroupContacts
        ON Contacts.name = GroupContacts.contactName`;
      db.all(sqlContacts, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
  static findById(id, callback) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM Contacts WHERE id = ?`, id, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }
  static deleteById(id, callback) {
    db.run(`DELETE FROM GroupContacts WHERE contactName = (SELECT name FROM Contacts WHERE id = ?)`, id);
    db.run(`DELETE FROM Contacts WHERE id = ?`, id, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(1);
      }
    });
  }
  static updateById(id, name, company, phone, email, callback) {
    let sqlUpdateContact = `UPDATE Contacts SET name = ?, company = ?, phone = ?, email = ? WHERE id = ?`;
    db.run(sqlUpdateContact, name, company, phone, email, id, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(1);
      }
    });
  }
}

module.exports = ContactsModel;
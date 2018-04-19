const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('address_book.db');

class Contact {
  static show() {
    let query = 'SELECT * FROM contacts';
    let queryGroup = ''
    let arr = [];
    let promise = new Promise((resolve, reject) => {
      let arr = []
      db.all(query, (err, rows) => {
        if (err) {
          reject(err)
        } else {
          resolve(rows)
        }
      });
    });
    return promise
  }
  static add(name, perusahaan, no_telp, email) {
    let query = `INSERT INTO contacts VALUES(null, '${name}', '${perusahaan}', ${no_telp}, '${email}')`;
    return new Promise(function (resolve, reject) {
      db.run(query, (err, rows1) => {
        if (!err) {
          let result = `Contact berhasil disimpan`
          resolve(result);
        } else {
          reject(err)
        }
      });
    });
  }
  static delete(contactId) {
    let query = `DELETE FROM contacts WHERE id=${contactId}`;
    let queryConjunction = `DELETE FROM contact_groups WHERE id=${contactId}`;
    return new Promise(function (resolve, reject) {
    db.run(query);
    db.run(queryConjunction);
    let result = 'Contact berhasil dihapus';
    resolve(result)
    });
  }
  static update(contactId, column, newData) {
    let query = `UPDATE contacts SET '${column}' = '${newData}' WHERE id = ${contactId}`;
    return new Promise(function (resolve, reject) {
    db.run(query);
    let result = 'Contact berhasil diupdate';
    resolve(result);
    });
  }
}

module.exports = Contact;
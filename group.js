const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('address_book.db');
class Group {
  static show() {
    let query = 'SELECT * FROM groups';
    db.each(query, (err, row) => {
      let queryContact = `SELECT contacts.name FROM contact_groups JOIN groups ON contact_groups.groupId = groups.id JOIN contacts ON contacts.id = contact_groups.contactId WHERE groups.id = ${row.id}`
      return new Promise(function (resolve, reject) {
        db.all(queryContact, (err, human) => {
          // console.log(grup)
          let humanName = []
          human.forEach(element => {
            humanName.push(element.name);
          });
          let result = `${row.id}. ${row.name}, Member: ${humanName.join(', ')}`
          resolve(result);
        })
      });
    });
  }
  static add(name, callback) {
    let query = `INSERT INTO groups VALUES(null, '${name})`;
    return new Promise(function (resolve, reject) {
      db.run(query);
      let result = 'Group berhasil dibuat'
      resolve(result)
    });
  }
  static delete(groupId) {
    let query = `DELETE FROM groups WHERE id=${groupId}`;
    let queryConjunction = `DELETE FROM contact_groups WHERE id=${groupId}`
    return new Promise(function (resolve, reject) {
      db.run(query);
      db.run(queryConjunction);
      let result = 'Group berhasil dihapus';
      resolve(result)
    });
  }
  static update(groupId, column, newData) {
    let query = `UPDATE groups SET '${column}' = '${newData}' WHERE id = ${groupId}`;
    return new Promise(function (resolve, reject) {
      db.run(query);
      let result = 'Group berhasil diupdate';
      resolve(result);
    });
  }
  static assign(groupId, contactId) {
    let query = `INSERT INTO contact_groups VALUES(null, ${contactId}, ${groupId})`;
    return new Promise(function (resolve, reject) {
      db.run(query)
      let result = 'Member sudah ditambahkan';
      resolve(result);
    });
  }
}

module.exports = Group;
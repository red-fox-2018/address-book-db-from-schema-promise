
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address-book-promise.db');

class GroupsModel {
  /* using this with, but not work with arrow function */
  // console.log('this -------', this);
  static invite(contactName, groupName) {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO GroupContacts VALUES (null, ?, ?)`, contactName, groupName, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(1);
        }
      });
    });    
  }
  
  static addOne(name) {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO Groups VALUES (null, ?)`, name, (err) => {
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
      let groupListSql = `
      SELECT
        Groups.name,
        GroupContacts.contactName
        FROM Groups
        LEFT JOIN GroupContacts ON Groups.name = GroupContacts.groupName;
    `;
      db.all(groupListSql, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
  
  static findById(id) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM Groups WHERE id = ?`, id, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }
  
  static deleteById(id) {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM GroupContacts WHERE groupName = (SELECT name FROM Groups WHERE id = ?)`, id);
      db.run(`DELETE FROM Groups WHERE id = ?`, id, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(1);
        }
      });
    });
  }
  
  static updateById(id, name) {
    return new Promise((resolve, reject) => {
      let sqlUpdateGroup = `UPDATE Groups SET name = ? WHERE id = ?`;
      db.run(sqlUpdateGroup, name, id, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(1);
        }
      });
    })
  }
}

module.exports = GroupsModel;

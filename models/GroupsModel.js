
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address-book.db');

class GroupsModel {
  static invite(contactName, groupName, callback) {
    db.run(`INSERT INTO GroupContacts VALUES (null, ?, ?)`, contactName, groupName, function (err) {
      /* using this with, but not work with arrow function */
      // console.log('this -------', this);
      if (err) {
        callback(err);
      } else {
        callback(1);
      }
    });    
  }
  static addOne(name, callback) {
    db.run(`INSERT INTO Groups VALUES (null, ?)`, name, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(1);
      }
    });
  }
  static getAll(callback) {

    let groupListSql = `
      SELECT
        Groups.name,
        GroupContacts.contactName
        FROM Groups
        LEFT JOIN GroupContacts ON Groups.name = GroupContacts.groupName;
    `;

    db.all(groupListSql, (err, rows) => {
      if (err) {
        callback(err);
      } else {
        callback(rows);
      }
    });
  }
  static findById(id, callback) {
    db.get(`SELECT * FROM Groups WHERE id = ?`, id, (err, row) => {
      if (err) {
        callback(err);
      } else {
        callback(row);
      }
    });
  }
  static deleteById(id, callback) {
    db.run(`DELETE FROM GroupContacts WHERE groupName = (SELECT name FROM Groups WHERE id = ?)`, id);
    db.run(`DELETE FROM Groups WHERE id = ?`, id, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(1);
      }
    });
  }
  static updateById(id, name, callback) {
    let sqlUpdateGroup = `UPDATE Groups SET name = ? WHERE id = ?`;
    db.run(sqlUpdateGroup, name, id, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(1);
      }
    });
  }
}

module.exports = GroupsModel;

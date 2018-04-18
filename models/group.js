"use strict"
const db = require('../libraries/database');

class Group {
  static getData() {
    let query = `SELECT * FROM Groups;`;

    return new Promise((resolve, reject) => {
      db.all(query, (err, rows) => {
        if (!err) {
          resolve(rows)
        } else {
          reject(err);
        }
      });
    });
  }

  static save(name) {
    let query = `INSERT INTO Groups
                 VALUES (NULL, '${name}');`;
    let statusMessage = `Group ${name} has been created`;

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

  static update(id, name) {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM Groups WHERE id = ${id};`, (err, rows) => {
        let statusMessage;
        if (rows.length === 0) {
          statusMessage = `There is no group with id ${id}`;
          resolve(statusMessage);
        } else {
          let query = `UPDATE Groups
                     SET name = '${name}'
                     WHERE id = ${id};`;

          db.run(query, err => {
            if (err) {
              reject(err);
            } else {
              statusMessage = `The group with id ${id} has been updated`;
            }

            resolve(statusMessage);
          })
        }
      })
    })
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM Groups WHERE id = ${id};`, (err, rows) => {
        let statusMessage;

        if (rows.length === 0) {
          statusMessage = `There is no group with id ${id}`;
          resolve(statusMessage);
        } else {
          let queryDelete = `DELETE FROM Groups
                           WHERE id = ${id};`;

          db.run(queryDelete, err => {
            if (err) {
              reject(err);
            } else {
              statusMessage = `The group with id ${id} has been deleted`;
            }

            resolve(statusMessage);
          })
        }
      })
    })
  }
}

module.exports = Group;
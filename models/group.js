const sqlite = require('sqlite3').verbose()

class Group{

  static db() {
    return new sqlite.Database('databaseContact.db')
  }

  static show() {
    var db = this.db()
    let query = `SELECT * FROM groups`
    return new Promise((res, rej) => {
      db.all(query, (err, groupList) => {
        if(err) {
          rej(err)
        } else {
          res(groupList)
        }
      })
    })
  }

  static add(groupName) {
    var db = this.db()
    return new Promise((res, rej) => {
      let query = `INSERT INTO groups (id, groupName) VALUES (null, '${groupName}')`
      db.run(query, (err, newGroup) => {
        if(err) {
          rej(err)
        } else {
          res(`added ${groupName} to Groups`)
        }
      })
    })
  }

  static update(value, id, cb) {
    var db = this.db()
    return new Promise((res, rej) => {
      let query = `UPDATE groups SET groupName = '${value}' WHERE id = ${id}`
      db.run(query, (err, updateGroup) => {
        if(err) {
          rej(err)
        } else {
          res('update success')
        }
      })
    })
  }

  static delete(id) {
    var db = this.db()
    let query1 = `DELETE FROM groups WHERE id = ${id}`
    let query2 = `DELETE FROM group_contact WHERE contactId = ${id}`
    return new Promise((res, rej) => {
      db.run(query1, query2, (err, deletedGroup) => {
        if(err) {
          rej('error')
        } else {
          res('group deleted')
        }
      })
    })
  }

}

module.exports = Group

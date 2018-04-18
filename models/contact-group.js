const sqlite = require('sqlite3').verbose()

class ContactGroup{
  static db() {
    return new sqlite.Database('databaseContact.db')
  }

  static show() {
    var db = this.db()
    let query = `SELECT * FROM group_contact`
    return new Promise((res, rej) => {
      db.all(query, (err, gcList) => {
        if(err) {
          rej(err)
        } else {
          res(gcList)
        }
      })
    })
  }

  static add(obj) {
    var db = this.db()
    let query = `INSERT INTO group_contact (id, contactId, groupId) VALUES (null, '${obj.contactId}', '${obj.groupId}')`
    return new Promise((res, rej) => {
      db.run(query, (err, newGC) => {
        if(err) {
          rej(err)
        } else {
          res('added to GC')
        }
      })
    })
  }

  static delete(id) {
    var db = this.db()
    let query = `DELETE FROM group_contact WHERE id = ${id}`
    return new Promise((res, rej) => {
      db.run(query, (err, deletedGroupContact) => {
        if(err) {
          rej(err)
        } else {
          res('group contact deleted')
        }
      })
    })
  }

}

module.exports = ContactGroup

const sqlite = require('sqlite3').verbose()

class Contact{

  static db() {
    return new sqlite.Database('databaseContact.db')
  }

  static show() {
    var db = this.db()
    let query = `SELECT * FROM contacts`
    return new Promise((res, rej) => {
      db.all(query, (err, contactList) => {
        if(err) {
          rej(err)
        } else {
          res(contactList)
        }
      })
    })
  }

  static add(objContact) {
    var db = this.db()
    return new Promise((res, rej) => {
      if(objContact.phone_number.length > 12 || objContact.phone_number.length < 11) {
        rej('phone number is too long/short')
      } else {
        let query = `INSERT INTO contacts (id, name, company, phone_number, email) VALUES (null, '${objContact.name}', '${objContact.company}', '${objContact.phone_number}', '${objContact.email}')`
        db.run(query, (err, newContact) => {
          if(err) {
            rej(err)
          } else {
            res(`added ${objContact.name} to Contact`)
          }
        })
      }
    })
  }

  static update(set, setValue, where, whereValue) {
    var db = this.db()
    let query = `UPDATE contacts SET ${set} = '${setValue}' WHERE ${where} = '${whereValue}'`
    return new Promise((res, rej) => {
      db.run(query, (err, updateContact) => {
        if(err) {
          rej('update failed')
        } else {
          res('update success')
        }
      })
    })
  }

  static delete(id) {
    var db = this.db()
    let query1 = `DELETE FROM contacts WHERE id = ${id}`
    let query2 = `DELETE FROM group_contact WHERE contactId = ${id}`
    return new Promise((res, rej) => {
      db.run(query1, query2, (err, deletedContact) => {
        if(err) {
          rej('error')
        } else {
          res('deleted contact')
        }
      })
    })
  }

}

module.exports = Contact

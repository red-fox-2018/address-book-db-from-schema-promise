const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/address_book.db');
const Process = require('../helpers/helper');

class Contact {
  constructor(name, company, phone, email) {
    this.name = name
    this.company = company
    this.phone = phone
    this.email = email
  }
}

class ModelContact {
  constructor() {

  }

  static add_contact(content, cb){

    const contact = new Contact(content[0], content[1], content[2], content[3])

    return new Promise(function(resolve, reject) {

    if (Process.checkPhoneNumber(content[2])) {

      if (Process.checkEmail(content[3])) {


          db.run(`INSERT INTO contacts(name, company, phone, email)
          VALUES("${contact.name}", "${contact.company}", "${contact.phone}", "${contact.email}")`, (err, success) => {

            if (err) {
              reject(err)
            } else {
              resolve(`success add "${contact.name}" to contact`)
            }

          })

        } else {

          return err

        }

      } else {

        return err

      }

    })

    .then((success) => {
      return success
    })
    .catch((err) => {

      return `\n error: please input valid command! \n
              ex:
              -----> ["node main.js addContact {name} {company} {phone} {email}"] \n
              -----> "phone number < 15" \n
              -----> "email = [something]@[something].[something]" \n`

    })

  }

  static update_contact(table_name, id, content){

    return new Promise((resolve, reject) => {

      db.run(`UPDATE contacts
              SET ${table_name} = "${content}"
              WHERE id = ${id}`, (err, success) => {

        if (err) {
          reject(err)
        } else {
          resolve(`success update ${id}'s ${table_name} to ${content}`)
        }

      })

    })

    .then((data) => {
      return data
    })
    .catch((err) => {
      return `\n error: please input valid command! \n
              ex:
              -----> ["node main.js updateContact {column_name} {contact_id} {change_value}"] \n`
    })

  }


  static delete_contact(id){

    return new Promise((resolve, reject) => {

      db.run(`DELETE FROM contacts
        WHERE id = ${id}`, (err, success) => {

          if (err) {
            reject(err)
          } else {
            resolve(`success delete data ${id} from contacts`)
          }

        })

    })

    .then((success) => {
      return success
    })
    .catch((err) => {
      return `\n error: please input valid command! \n
              ex:
              -----> ["node main.js deleteContact {contact_id}"]\n`
    })

  }

  static show_contact(id){

    return new Promise((resolve, reject) => {

      db.all(`SELECT contacts.id, contacts.name, contacts.company, contacts.phone, contacts.email, groups.name AS Groupname
        FROM contacts JOIN contact_group ON contacts.id = contact_group.id_contact
        JOIN groups ON contact_group.id_group = groups.id
        where contacts.id = ${id}`, (err, data) => {


          if (err) {
            reject(err)
          } else {
            resolve(data)
          }

        })

    })

    .then((data) => {
      return data
    })
    .catch((err) => {
      return `\n error: please input valid command! \n
              ex:
              -----> ["node main.js showContact {contact_id}"]\n`
    })

  }

}

module.exports = ModelContact;

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/address_book.db');
const Process = require('../helpers/helper');

class ContactGroup {
  constructor(contact_name, group_name) {
    this.contact_name = contact_name
    this.group_name = group_name
  }
}

class ModelGroupContact {
  constructor() {

  }

  static addNewContact(content){

    const newMember = new ContactGroup(content[0], content[1])

    return new Promise((resolve, reject) => {

      db.all(`SELECT * FROM contacts WHERE name = "${content[0]}"`, (err, data) => {

        if (err) {
          reject(err)
        } else {
          resolve(data[0].id);
        }

      })

    })

    .then((data_id) => {

      return new Promise((resolve, reject) => {

        db.all(`SELECT * FROM groups WHERE name = "${content[1]}"`, (err, dataGroup) => {

          if (err) {
            reject(err)
          } else {
            resolve(dataGroup[0].id);
          }

        })

      })

      .then((groupId) =>{
        return [data_id, groupId]
      })

    })

    .then((allData) => {

      return new Promise(function(resolve, reject) {

        db.run(`INSERT INTO contact_group(id_contact, id_group)
                VALUES(${allData[0]}, ${allData[1]})`, (err, dataGroup) => {

          if (err) {
            reject(err)
          } else {
            resolve(`success add "${newMember.contact_name}" to "${newMember.group_name}"`);
          }

        })

      })

    })

    .then((success) => {
      return success
    })

  }

}


module.exports = ModelGroupContact;

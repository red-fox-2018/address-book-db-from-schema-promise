const fs = require('fs')
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/address_book.db');

class ContactsGroup{
  static saveContactToGroup(contactId, groupId){
      return new Promise((resolve,reject)=>{
        let query = `INSERT INTO contacts_group(contactId, groupId)
                      VALUES ('${contactId}', '${groupId}'
                      );`
        db.run(query,(err)=>{
            if(err){
              reject('gagal register contact ke group')
            }else{
              resolve('contack berhasil diinput ke group')
            }
          });
      })
  }
  static removeContactFromGroup(contactId,groupId){
    return new Promise((resolve,reject)=>{
      let query = `DELETE FROM contacts_group
                  where contacts_group.contactId = 6
                  AND contacts_group.groupId = 3;`
      db.run(query,(err)=>{
                if(err){
                  reject('gagal add contact ke group')
                }else{
                  resolve('contact berhasil di add ke group')
                }
              })
    })
  }
  static getList(){
    return new Promise((resolve,reject)=>{
      let query = `SELECT contacts.id,contacts.name, contacts.perusahaan,contacts.phone,contacts.email,groups.name AS groupName
                    FROM contacts
                    LEFT JOIN contacts_group
                    ON contacts_group.contactId = contacts.id
                    LEFT JOIN groups
                    ON contacts_group.groupId = groups.id`
      db.all(query,(err,dataList)=>{
                if(err){
                  reject(err)
                }else{
                  resolve(dataList)
                }
              })
    })
  }
}
// db.close();
module.exports = ContactsGroup

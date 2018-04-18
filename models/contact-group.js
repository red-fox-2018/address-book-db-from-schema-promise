const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database/address_book.db')


class ContactGroup {

    static assign(contactName, groupName){
        return new Promise((resolve, reject)=>{
            db.get(`SELECT id FROM Contacts WHERE name = "${contactName}"`, (err, contact) =>{
                db.get(`SELECT id FROM Groups WHERE group_name = "${groupName}"`, (err, group) =>{
                    let query = `INSERT INTO ContactGroups (contactId, groupId) 
                                    VALUES ("${contact.id}", "${group.id}")`
    
                    db.run(query, err =>{
                        if(!err){
                            resolve('assign sukses')
                        } else {
                            reject(err)
                        }
                    })
                })
            })
        })
    }
}

module.exports = ContactGroup
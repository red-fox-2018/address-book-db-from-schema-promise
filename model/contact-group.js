const sqlite3 = require('sqlite3').verbose()

class ContactGroup{

    static openDB() {

        return new sqlite3.Database('./addressBook.db')
    }

    static create(idContact,idGroup) {

        return new Promise(function(resolve,reject){

        let db = ContactGroup.openDB()
        let query = `INSERT INTO ContactGroup
                     VALUES (
                        null,
                        ${idContact},
                        ${idGroup}
                    )`
        db.run(query,function(err){
            if(err){
                reject(err)
            } else {
                let msg = `Insert ${idContact} to group ${idGroup} success`
                resolve(msg)
            }
        })

        db.close()
        })
    }

    static update(id,idContact,idGroup) {

        return new Promise(function(resolve,reject){

        let db = ContactGroup.openDB()
        let query = `UPDATE ContactGroups
                     SET
                     idContact = ${idContact},
                     idGroup = ${idGroup}
                     WHERE
                     ID = ${id}`

        db.run(query,function(err){
            if(err){
                reject(err)
            }else{
                let msg = `Update ${idContact} success`
                resolve(msg)
            }
        })

        db.close()
        })
    }

    static delete(id){

        return new Promise(function(resolve,reject){

        let db = ContactGroup.openDB()
        let query = `DELETE FROM ContactGroups
                     WHERE id = ${id}
                    `
        db.run(query,function(err){
            if(err){
                reject(err)
            }else {
                let msg = `Delete Contact Group success`
                resolve(msg)
            }
        })

        db.close()
        })
    }
}

module.exports = ContactGroup
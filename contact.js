const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('AddressBook.db')

class Contact{
    static addDB(company, phone, email, name){
        let query = `INSERT INTO contacts VALUES(null,"${name}", "${company}", "${phone}", "${email}")`
        let promise = new Promise(function(resolve,reject){
            db.run(query,function(err,data){
                if(err){
                    reject(false)
                }
                else{
                    let addedData = [name, company, phone, email]
                    let obj = {
                        status: true,
                        data: addedData
                    }
                    resolve(obj)
                }
            })
        })
        return promise
    }

    static showDB(){
        let query = `SELECT contacts.id, contacts.name, contacts.company, contacts.phone, contacts.email, groups.name_group 
                    FROM contacts LEFT JOIN contact_group ON contacts.id = contact_group.contactId
                    LEFT JOIN groups ON contact_group.groupId = groups.id_group`
        return new Promise(function(resolve,reject){
            db.all(query,[],function(err,contactGroupData){
                if(err){
                    reject(false)
                }
                else{
                    resolve(contactGroupData)
                }
            })
        })
    }

    static deleteDB(id, callback){
        let query = `DELETE FROM contacts WHERE id = ${id}`
        return Promise(function(resolve,reject){
            db.run(query,function(){
                let queryConjungtion = `DELETE FROM contact_group WHERE contactId = ${id}`
                db.run(queryConjungtion,function(){
                    callback(true)
                })
            })
        })
    }

    static updateDB(command3, id, update){
        return new Promise(function(resolve,reject){
            db.run(`UPDATE contacts SET ${command3} = "${update}" WHERE id = ${id}`,function(err){
                if(err){
                    reject(false)
                }
                else{
                    resolve(true)
                }
            })
        })
    }
}

module.exports = Contact
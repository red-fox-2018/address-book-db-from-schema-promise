const Controller = require('../controller/controller')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('address_book.db')

class Group{
    constructor(name){
        this.name = name
    }

    static listGroup(callback){
        let queryListGroup = `SELECT contact.name,contact.company,contact.phone,
                              contact.email,groups.name AS "group" FROM contact 
                              JOIN contactGroup 
                              ON contactId = contact.id 
                              JOIN groups 
                              ON groups.id = groupsId ORDER BY contact.name ASC`
        return new Promise(function(resolve,reject){
            db.all(queryListGroup,function(err,rows){
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            })
        })
    }

    addGroup(callback){
        let name = this.name
        let queryAddGroup = `INSERT INTO groups VALUES(null,'${name}')`
        return new Promise(function(resolve,reject){
            db.run(queryAddGroup,function(err){
                if(err){
                    reject(err)
                }else{
                    resolve(`Data id ${this.lastID} ${name} has been Added`)
                }
            })
        })
        
    }

    static updateGroup(id,kolom,value){
        let queryUpdateGroup = `UPDATE groups SET ${kolom} = '${value}' WHERE id = ${id}`
        return new Promise(function(resolve,reject){
            db.run(queryUpdateGroup,function(err){
                if(err){
                    reject(err)
                }else{
                    resolve(`Data id ${id} SET ${kolom} with Value ${value} been Updated`)
                }
            })
        })
    }

    static deleteGroup(id){
        let queryDeleteGroup = `DELETE FROM groups WHERE groups.id = '${id}'`
        let queryContactGroup = `DELETE FROM contactGroup WHERE contactGroup.groupsId = '${id}'`

        return new Promise(function(resolve,reject){
            db.run(queryDeleteGroup)
            db.run(queryContactGroup,function(err){
                if(err){
                    reject(err)
                }else{
                    resolve(`Data id ${id} has been Deleted`)
                }
            })
        })
    }

    static assignContact(contactId,groupId) {
        let query = `INSERT INTO contactGroup (contactId, groupsId) VALUES ('${contactId}', '${groupId}')`
        return new Promise(function(resolve,reject){
            db.run(query,function(err){
                if(err){
                    reject(err)
                }
                else{
                    resolve(`Data id member sudah ditambahkan`)
                }
            })
        })
    }
}

module.exports = Group
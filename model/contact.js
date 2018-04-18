const Controller = require('../controller/controller')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('address_book.db')

class Contact{
    constructor(name,company,phoneNumber,email){
        this.name = name
        this.company = company
        this.phoneNumber = phoneNumber
        this.email = email
    }

    static listContact(){
        let queryListContact = `SELECT contact.name,contact.company,contact.phone,
                                contact.email,groups.name AS "group" FROM contact 
                                JOIN contactGroup 
                                ON contactId = contact.id 
                                JOIN groups 
                                ON groups.id = groupsId ORDER BY contact.name ASC`
        return new Promise(function(resolve,reject){
            db.all(queryListContact,function(err,rows){
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            })
        })
    }

    addContact(){
        let name = this.name
        let queryAddContact = `INSERT INTO contact VALUES(null,'${name}','${this.company}','${this.phoneNumber}','${this.email}')`
        return new Promise(function(resolve,reject){
            db.run(queryAddContact,function(err){
                if(err){
                    reject(err)
                }else{
                    resolve(`Data id ${this.lastID} ${name} has been Added`)
                }
            })
        })
    }

    static updateContact(id,kolom,value){
        let queryUpdateContact = `UPDATE contact SET ${kolom} = '${value}' WHERE id = '${id}'`
        return new Promise(function(resolve,reject){
            db.run(queryUpdateContact,function(err){
                if(err){
                    reject(err)
                }else{
                    resolve(`Data id ${id} SET ${kolom} with Value ${value} been Updated`)
                }
            })
        })
    }

    static deleteContact(id){
        let queryDeleteContact = `DELETE FROM contact WHERE id = '${id}'`
        return new Promise(function(resolve,reject){
            db.run(queryDeleteContact,function(err){
                if(err){
                    reject(err)
                }else{
                    resolve(`Data id ${id} has been Deleted`)
                }
            })
        })
    }
}

module.exports = Contact
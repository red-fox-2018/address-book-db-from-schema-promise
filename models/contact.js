const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database/address_book.db')


class Contact {

    static create(name, company, phone, email){
        return new Promise((resolve, reject)=>{
            let query = `INSERT INTO Contacts (name, company, phone, email) 
            VALUES ("${name}",
                    "${company}",
                    "${phone}",
                    "${email}")`

            db.run(query, err =>{
                if(!err){
                    resolve('save contact sukses')
                } else {
                    reject(err)
                }
            })
        })

    }

    static update(id, param, newValue){
        return new Promise((resolve, reject)=>{
            let query = `UPDATE Contacts 
            SET ${param} = "${newValue}" 
            WHERE id = ${id}`

            db.run(query, err =>{
                if(!err){
                    resolve('update contact sukses')
                } else {
                    reject(err)
                }
            })
        })
        
    }

    static delete(name){
        return new Promise((resolve, reject)=>{
            let query = `DELETE FROM Contacts WHERE name = "${name}"`

            db.run(query, err =>{
                
                if(!err){
                    resolve('delete contact sukses')
                } else {
                    reject(err)
                }
            })
        })
        
    }

    static show(){
        return new Promise((resolve, reject)=>{
            let query = `SELECT contacts.id, contacts.name, contacts.company, contacts.phone, contacts.email, groups.group_name
            FROM contacts 
            JOIN contactgroups ON contacts.id = contactgroups.contactId
            JOIN groups ON contactgroups.groupId = groups.id`

            db.all(query, (err, rows)=>{
                if(!err){
                    resolve(rows)
                } else {
                    reject(err)
                }
            })
        })
        
    }

}

module.exports = Contact



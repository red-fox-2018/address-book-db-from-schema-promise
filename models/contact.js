const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('address_book.db')

class Contact {
    constructor(name, perusahaan, telp, email) {
        this.name = name
        this.perusahaan = perusahaan
        this.telp = telp
        this.email = email
    }
    save() {
        let promise = new Promise((resolve,reject)=>{
            let save = `INSERT INTO contacts VALUES(null,'${this.name}','${this.perusahaan}','${this.telp}','${this.email}')`
            db.run(save, function (err) {
                if(err){
                    reject(err)
                }
                else{
                    resolve(`kontak berhasil disimpan`)
                }
            })
        })
        return promise
    }
    update(property, value, id) {
        let promise = new Promise((resolve, reject) => {
            let update = `UPDATE contacts SET ${property} = '${value}' WHERE id = ${id}`
            db.run(update, function (err) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve('kontak berhasil diupdate')
                }
            })
        })
        return promise
    }
    delete(id, callback) {
        let promise = new Promise((resolve, reject) => {
            let delete_rows = `DELETE FROM contacts WHERE id = ${id}`
            db.run(delete_rows, function (err) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve('kontak berhasil dihapus')
                }
            })
        })
        return promise
    }
    showContact() {
        let contact = `SELECT contacts.*,groups.name AS groups FROM contacts
                        JOIN contactGroups
                        ON contacts.id = contactGroups.contactId
                        JOIN groups
                        ON groups.id = contactGroups.groupsId
                        ORDER BY contacts.id ASC`
        let promise = new Promise((resolve,reject)=>{
            db.all(contact, function (err, rows) {
                if (err) {
                    reject('error')
                }
                
                let list_name = {}
                rows.forEach(function (data) {
                    if (list_name[data.name] == undefined) {

                        list_name[data.name] = [data.groups]
                    }
                    else {
                        list_name[data.name].push(data.groups)
                    }

                })
                let message = ''
                let num = 1
                for (let key in list_name) {
                    let list_contact = {}
                    rows.forEach(function (data) {
                        if (data.name == key) {
                            list_contact = data
                        }
                    })
                    message += `${num}. ${list_contact.name}, ${list_contact.company}, ${list_contact.telp},${list_contact.email}, groups: ${list_name[key]}`
                    message += '\n'
                    num++
                }
                resolve(message.substr(0,message.length-1))
            })
        })
        return promise
    }
}

module.exports = Contact
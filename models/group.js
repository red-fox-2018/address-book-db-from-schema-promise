const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('address_book.db')

class Group {
    constructor(name) {
        this.name = name
    }
    save() {
        let promise = new Promise((resolve,reject)=>{
            db.run(`INSERT INTO groups VALUES(null,'${this.name}')`,function (err) {
                if(err){
                    reject(err)
                }
                else{
                    resolve('group berhasil di save')
                }
            })
        })
        return promise
    }
    update(value, id) {
        let promise = new Promise((resolve,reject)=>{
            db.run(`UPDATE groups SET name = '${value}' WHERE id = ${id}`,err=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve('group berhasil di update')
                }
            })
        })
        return promise
    }
    delete(id) {
        let delete_assign = `SELECT contactGroups.id FROM groups
                            join contactGroups
                            ON groups.id=contactGroups.groupsId
                            WHERE contactGroups.groupsId = ${id}`
        let promise = new Promise((resolve,reject)=>{
            db.serialize(function (err) {
                db.each(delete_assign, function (err, rows) {
                    if (err) {
                        reject('error')
                    }
                    db.run(`DELETE FROM contactGroups  WHERE id = ${rows.id}`)
                })
                db.run(`DELETE FROM groups  WHERE id = ${id}`,err=> {
                    if(err){
                        reject('error')
                    }
                    else{
                        resolve('group berhasil di delete')
                    }
                })
            })
        })
        return promise
    }
    showGroup() {
        let group = `SELECT groups.id,groups.name AS groups, contacts.name FROM groups
                    join contactGroups
                    ON contactGroups.groupsId = groups.id
                    join contacts
                    ON contacts.id = contactGroups.contactId`
        let promise = new Promise((resolve,reject)=>{
            db.all(group, function (err, rows) {
                if (err) {
                    reject('error')
                }
                let list_name = {}
                rows.forEach(function (data) {
                    if (list_name[data.groups] == undefined) {
                        list_name[data.groups] = [data.name]
                    }
                    else {
                        list_name[data.groups].push(data.name)
                    }

                })
                let num = 1
                let message = ''
                for (let key in list_name) {
                    message+=`${num}. ${key}: ${list_name[key]}`
                    message+='\n'
                    num++
                }
                resolve(message.substr(0,message.length-1))
            })
        })
       return promise
    }
    assign(contactId, groupsId) {
        let add = `INSERT INTO contactGroups VALUES(null,'${contactId}','${groupsId}')`
        let promise = new Promise((resolve,reject)=>{
            db.run(add,err=>{
                if(err){
                    reject('error')
                }
                else{
                    resolve(`kontak telah didaftarkan kedalam group`)
                }
            })
        })
        return promise 
    }
}

module.exports = Group
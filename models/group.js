const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database/address_book.db')


class Group {

    static create(name){
        return new Promise((resolve, reject)=>{
            let query = `INSERT INTO Groups (group_name) VALUES ("${name}")`

            db.run(query, err =>{
                if(!err){
                    resolve('save group sukses')
                } else {
                    reject(err)
                }
            })
        })
        
    }

    static update(id, param, newValue){
        return new Promise((resolve, reject)=>{
            let query = `UPDATE Groups 
            SET ${param} = "${newValue}" 
            WHERE id = ${id}`

            db.run(query, err =>{
                if(!err){
                    resolve('update group sukses')
                } else {
                    reject(err)
                }
            })
        })

    }

    static delete(name){
        return new Promise((resolve, reject)=>{
            let query = `DELETE FROM Groups WHERE group_name = "${name}"`

            db.run(query, err =>{
                
                if(!err){
                    resolve('delete group sukses')
                } else {
                    reject(err)
                }
            })
        })
    }

}

module.exports = Group
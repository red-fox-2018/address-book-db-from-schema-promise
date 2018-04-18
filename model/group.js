const sqlite3 = require('sqlite3').verbose()

class Group{

    static openDB() {

        return new sqlite3.Database('./addressBook.db')
    }

    static create(name) {

        return new Promise(function(resolve,reject){

        let db = Group.openDB()
        let query = `INSERT INTO Groups
                     VALUES (
                        null,
                        "${name}"
                    )`
        db.run(query,function(err){
            if(err){
                reject(err)
            } else {
                let msg = `Insert ${name} success`
                resolve(msg)
            }
        })

        db.close()
        })
    }

    static update(id,name) {

        return new Promise(function(resolve,reject){

        let db = Group.openDB()
        let query = `UPDATE Groups
                     SET
                     name = "${name}"
                     WHERE
                     ID = ${id}`

        db.run(query,function(err){
            if(err){
                resolve(err)
            }else{
                let msg = `Update ${name} success`
                reject(msg)
            }
        })

        db.close()
        })
    }

    static delete(id,cb){

        return new Promise(function(resolve,reject){

        let db = Group.openDB()
        let query = `DELETE FROM Groups
                     WHERE id = ${id}
                    `
        db.run(query,function(err){
            if(err){
                reject(err)
            }else {
                let msg = `Delete group success`
                resolve(msg)
            }
        })

        db.close()
        })
    }
}

module.exports = Group
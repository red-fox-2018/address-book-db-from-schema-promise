const fs = require('fs')
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/address_book.db');

class Group{
  static saveAddGroup(name){
    return new Promise((resolve,reject)=>{
      let query = `INSERT INTO groups(name)
                    VALUES ('${name}'
                    );`
      db.run(query,(err)=>{
          if(err){
            reject('group gagal diinput')
          }else{
            resolve('group berhasil diinput')
          }
        });
    })
  }
  static saveUpdateGroup(name,id){
      return new Promise((resolve,reject)=>{
        let query = `UPDATE groups SET
                      name = '${name}'
                      WHERE id = '${id}'`
        db.run(query,(err)=>{
                  if(err){
                    reject('group gagal diupdate')
                  }else{
                    resolve('group berhasil diupdate')
                  }
                });
      })
  }
  static deletGroupDB(id){
      return new Promise((resolve,reject)=>{
        let query = `DELETE FROM groups
                      WHERE
                      id = "${id}";`
                      console.log(query)
        db.run(query,(err) => {
                if(err){
                  reject('group gagal dihapus:',err)
                }else{
                  db.run(`DELETE FROM contacts_group
                        WHERE
                        groupId = '${id}';`,(err)=>{
                          if(err){
                            reject('group berhasil dihapus tapi contact masih ke-asign')
                          }else{
                            resolve('group berhasil dihapus')
                          }
                        });
                }
              });
      })
  }
}
module.exports = Group

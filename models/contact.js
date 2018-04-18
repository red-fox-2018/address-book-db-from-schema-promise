const fs = require('fs')
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/address_book.db');

class Contact{

  static saveContact(name, perusahaan, phone, email){
    return new Promise((resolve,reject)=>{
      let angka = '0123456789'
      if(phone.length > 17){
        resolve('maksimal phone 17 digit')
      }else{
        let isPhone = true
        for(let i = 0; i < phone.length;i++){
            let checker = 0
            for(let j = 0; j < angka.length;j++){
              if(phone[i] === angka[j]){
                checker++
              }
            }
            if(checker === 0){
                resolve('input phone salah karena mengandung string')
                isPhone = false
                break
            }
        }if(isPhone){
          let query = `INSERT INTO contacts(name, perusahaan, phone, email)
                       VALUES("${name}","${perusahaan}","${phone}","${email}");`
          db.run(query,(err)=>{
                    if(err){
                      reject('data gagal diinput')
                    }else{
                      resolve('data berhasil diinput')
                    }
                  }
          );
        }
      }
    })
  }

  static saveUpdateContact(name, perusahaan, phone, email,id){
      return new Promise((resolve,reject)=>{
        let query = `UPDATE contacts SET
                    name = "${name}",
                    perusahaan = "${perusahaan}",
                    phone = "${phone}",
                    email = "${email}"
                    WHERE id = "${id}"`
        db.run(query,(err)=>{
                  if(err){
                    reject('data gagal diupdate')
                  }else{
                    resolve('data berhasil diupdate')
                  }
                });
      })
  }

  static deleteContactDB(id){
    return new Promise((resolve,reject)=>{
      let query = `DELETE FROM contacts
                    WHERE
                    id = "${id}";`
      db.run(query,(err)=>{
              if(err){
                reject('data gagal dihapus')
              }else{
                resolve('data berhasil dihapus')
              }
            });
    })
  }
}

module.exports = Contact

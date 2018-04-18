var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/address_book.db');

function createTable(tableQuery){
  return new Promise((resolve,reject)=>{
    db.run(tableQuery,(err,rows)=>{
              if(err){
                reject(err)
              }else{
                resolve('success')
              }
    })
  })
}

let tableContacts = `CREATE TABLE IF NOT EXISTS contacts(
                      id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                      name VARCHAR,
                      perusahaan VARCHAR,
                      phone VARCHAR,
                      email VARCHAR
                    );`


let tableGroup = `CREATE TABLE IF NOT EXISTS groups(
                  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                  name VARCHAR
                );`

let tableConj = `CREATE TABLE IF NOT EXISTS contacts_group (
                  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                  contactId INTEGER NOT NULL ,
                  groupId INTEGER NOT NULL,
                  FOREIGN KEY(contactId) REFERENCES contacts(id),
                  FOREIGN KEY(groupId) REFERENCES groups(id)
                );`

createTable(tableContacts)
.then(stat=>{
  console.log(stat)
})
.catch(err=>{
  console.log(err)
})

createTable(tableGroup)
.then(stat=>{
  console.log(stat)
})
.catch(err=>{
  console.log(err)
})

createTable(tableConj)
.then(stat=>{
  console.log(stat)
})
.catch(err=>{
  console.log(err)
})

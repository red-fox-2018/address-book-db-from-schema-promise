const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('../db/address_book.db')

let queryTableGroup = `create table if not exists groups(
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            groupName varchar(25)
                       );
                       `

let queryTableContact = `create table if not exists contacts(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name varchar(25),
                        company varchar(25),
                        telephonNumber varchar(15),
                        email varchar(50)
                   );
                   `                       

let queryTableContactGroup = `create table if not exists contactGroups(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    groupId int,
                    contactId int
               );
               `

db.run(queryTableGroup,(err)=>{
    if(err) throw err;
})               

db.run(queryTableContact,(err)=>{
    if(err) throw err;
})

db.run(queryTableContactGroup,(err)=>{
    if(err) throw err;
})

db.close
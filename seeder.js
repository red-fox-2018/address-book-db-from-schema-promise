const fs = require('fs')
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/address_book.db');

let contacts = fs.readFileSync('./db/contact.csv','utf8').trim().split('\n')
let toDb = contacts.slice(1)
var contactTosqlite =[]
toDb.forEach(data=>{
  contactTosqlite.push(data.split(','))
})

let groups = fs.readFileSync('./db/group.csv','utf8').trim().split('\n')
let groupstoDb = groups.slice(1)
var groupsTosqlite =[]
groupstoDb.forEach(data=>{
  groupsTosqlite.push(data.split(','))
})

let contgroups = fs.readFileSync('./db/groupcontact.csv','utf8').trim().split('\n')
let contgroupstoDb = contgroups.slice(1)
var contgroupsTosqlite =[]
contgroupstoDb.forEach(data=>{
  contgroupsTosqlite.push(data.split(','))
})
console.log(contactTosqlite)
console.log(groupsTosqlite)
console.log(contgroupsTosqlite)

// db.serialize(function() {
    // contactTosqlite.forEach(dataContact=>{
    //   let queryContact = `INSERT INTO contacts VALUES(null,"${dataContact[0]}","${dataContact[1]}","${dataContact[2]}","${dataContact[3]}")`
    //   db.serialize(function() {
    //     db.run(queryContact)
    //   });
    // })
    //
    // groupsTosqlite.forEach(dataGroup=>{
    //   let queryGroup = `INSERT INTO groups VALUES(null,"${dataGroup[0]}")`
    //   db.serialize(function() {
    //     db.run(queryGroup)
    //   })
    // })

    contgroupsTosqlite.forEach(datacontgroups=>{
      let queryGroup = `INSERT INTO contacts_group VALUES(null,"${datacontgroups[1]}","${datacontgroups[0]}")`
      db.serialize(function() {
        db.run(queryGroup)
      })
    })
// //

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');
//your code here
db.serialize(function(err) {
if(err){
  throw err;
}else{

         // db.run(`CREATE TABLE contact
         //         (contact_id INTEGER PRIMARY KEY AUTOINCREMENT,
         //          name VARCHAR(20),
         //          company VARCHAR(50),
         //          phoneNumber VARCHAR(20),
         //          email VARCHAR(50))`);

                  db.run(`CREATE TABLE groupcontact (group_id INTEGER PRIMARY KEY AUTOINCREMENT,groupName VARCHAR(20))`);

                           // db.run(`CREATE TABLE contact_group
                           //         (id INTEGER PRIMARY KEY AUTOINCREMENT,
                           //          group_id VARCHAR(20),
                           //          contact_id)`);
    }

})
db.close();

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database/database.db');

class ModelGrup {
  constructor() {

  }

  static insertGroup(data,callback){
    //console.log(data
    let sql = `INSERT INTO groupcontact
              (group_id,groupName)
              VALUES(null,?)`
    db.serialize(function(err) {
        db.run(sql,`${data[0]}`)
        //console.log(sql);
        if(err){
          throw err;
        }else{
          callback(`${data[0]} sukses di input`);
        }
    })
  }

  static groupDetail(content,callback){
    let sql=`select name, groupName
              from contact_group
              inner join contact on contact_group.contact_id =contact.contact_id
              inner join groupcontact on contact_group.group_id = groupcontact.group_id
              where groupName = '${content[0]}'`
      db.all(sql,function(err,resultData) {
        if(err){
          callback(err)
        }else{
          callback(resultData)
        }
      })
  }

  static deleteGroup(content, callback){
       let query = `DELETE FROM groupcontact WHERE groupName = "${content}"`

       db.run(query, err =>{

           if(!err){
               callback('delete group sukses')
           } else {
               callback('data tidak ada')
           }
       })
   }


}

module.exports = ModelGrup;

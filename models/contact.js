const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database/database.db');

class ModelContact {
  constructor() {

  }

  static checkPhone(phoneNumber){

    if (phoneNumber.length <= 7) {
      return true
    } else {
      return false
    }

  }

  static checkEmail(email){

    if (email.indexOf('@') != -1 && email.indexOf('.') != -1) {

      if (email.indexOf('@') < email.lastIndexOf('.')) {
        return true;
      }

    }

    return false;

  }

  static insertContact(data,callback){
    //console.log(data
    // console.log(data);
    return new Promise(function(resolve, reject) {

      if (ModelContact.checkPhone(data[2])) {

        if (ModelContact.checkEmail(data[3])) {

          db.run(`INSERT INTO contact(name, company, phoneNumber, email)
                  VALUES("${data[0]}", "${data[1]}", "${data[2]}", "${data[3]}")`, (err, success) => {

            if (err) {
              reject(err)
            } else {
              resolve(`yay success!`)
            }

          })

      } else {
        return err
      }

    } else {
      return err;
    }

  })

  .then((success) => {
    return success;
  })

  .catch((err) => {
    return `gagal vroh`;
  })
    // var pattern  = /\S+@\S+\.\S+/
    // let str = data[3]
    // if(str.match(pattern)===null){
    //   callback('format email salah')
    // }else if(data[2].length < 7){
    //   callback('format telepon salah')
    // }else{
    //   let sql = `INSERT INTO contact
    //             (contact_id,name,company,phoneNumber,email)
    //             VALUES(null,?,?,?,?)`
    //   db.serialize(function(err) {
    //       db.run(sql,`${data[0]}`,`${data[1]}`,`${data[2]}`,`${data[3]}`)
    //       //console.log(sql);
    //       if(err){
    //         throw err;
    //       }else{
    //         callback(`${data[0]} sukses di input`);
    //       }
    //   })
    // }
  }

  static updateContact(content, cb){
       let query = `UPDATE Contacts
                    SET ${content[1]} = "${content[2]}"
                    WHERE id = ${content[0]}`

       db.run(query, err =>{

           if(!err){
               cb('update contact sukses')
           } else {
               cb(err)
           }
       })
   }


  static nameDetail(content,callback){
    let sql=`select name, groupName
              from contact_group
              inner join contact on contact_group.contact_id =contact.contact_id
              inner join groupcontact on contact_group.group_id = groupcontact.group_id
              where name = '${content[0]}'`
      db.get(sql,function(err,resultData) {
        if(err){
          callback(err)
        }else{
          callback(resultData)
        }
      })
  }



}

module.exports = ModelContact;

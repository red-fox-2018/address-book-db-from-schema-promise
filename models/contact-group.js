const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./database/address_book.db');

class CGroupModel {

  static findAll(cb){
    return new Promise(function(res, rej){
      let query = `SELECT c.name, c.company, c.phone, c.email, g.group_name
                   FROM Contact_Groups AS cg
                   JOIN Contacts AS c ON cg.contactId = c.id
                   JOIN Groups AS g ON cg.groupId = g.id;`
      db.all(query, function(err, row){
        if(err){
          rej(err)
        }else{
          res(row)
        }
      })
    })
  }

  static create(dataInput, cb){
    let contactWhere = CGroupModel.arrToObj([dataInput[0]])
    let groupWhere = CGroupModel.arrToObj(dataInput.slice(1))
    let column = '*'


    contact_group.findWhere('Contacts', column, contactWhere, function(err, rowContact){
      contact_group.findWhere('Groups', column, groupWhere, function(err, rowGroup){
        let contactId = rowContact[0].id
        let groupId = rowGroup[0].id
        let newCGroup = new CGroup([contactId, groupId])

        contact_group.create(tableName, newCGroup, function(err){
          cb(err, rowContact[0], rowGroup[0])
        })

      })
    })
  }

  static destroy(dataInput, cb){
    let contactWhere = CGroupModel.arrToObj([dataInput[0]])
    let groupWhere = CGroupModel.arrToObj(dataInput.slice(1))
    let column = '*'


    contact_group.findWhere('Contacts', column, contactWhere, function(err, rowContact){
        if(rowContact.length == 0){
          cb("not found", contactWhere, groupWhere)
        } else {
          contact_group.findWhere('Groups', column, groupWhere, function(err, rowGroup){
            if(rowGroup.length == 0){
              cb("not found", contactWhere, groupWhere)
            } else {
              let contactId = rowContact[0].id
              let groupId = rowGroup[0].id
              let newCGroup = new CGroup([contactId, groupId])

              contact_group.destroy(tableName, newCGroup, function(err){
                cb(err, contactWhere, groupWhere)
              })
            }
          })
        }
    })
  }

}

class CGroup {
  constructor(arrCGroup) {
    this.contactId = arrCGroup[0],
    this.groupId = arrCGroup[1]
  }
}
module.exports = CGroupModel;

const contact = require('./models/contact')
const group = require('./models/group.js')
const contactGroup = require('./models/contact-group.js')
const view = require('./view.js')
class Controller {
  static insertContact(name, perusahaan, phone, email,call){
      contact.saveContact(name, perusahaan, phone, email)
      .then( statInsert =>{
        view.print(statInsert)
      })
      .catch(err=>{view.print(err)})
  }
  static updateContact(name, perusahaan, phone, email,id){
      contact.saveUpdateContact(name, perusahaan, phone, email,id)
      .then(statUpdate=>{
        view.print(statUpdate)
      })
      .catch(err=>{view.print(err)})
  }
  static deleteContact(id){
      contact.deleteContactDB(id)
      .then(statDel=>{
        view.print(statDel)
      })
      .catch(err=>{view.print(err)})
  }
  static insertGroup(name){
      group.saveAddGroup(name)
      .then(statInsert=>{
        view.print(statInsert)
      })
      .catch(err=>{view.print(err)})
  }
  static updateGroup(name,id){
      group.saveUpdateGroup(name,id)
      .then(statUpdateGroup=>{
        view.print(statUpdateGroup)
      })
      .catch(err=>{view.print(err)})
  }
  static deleteGroup(id){
      group.deletGroupDB(id)
      .then(statDel=>{
        view.print(statDel)
      })
      .catch(err=>{view.print(err)})
  }
  static insertContactToGroup(contactId, groupId){
      contactGroup.saveContactToGroup(contactId, groupId)
      .then(statCreateContactToGroup=>{
        view.print(statCreateContactToGroup)
      })
      .catch(err=>{view.print(err)})
  }
  static deletContactFromGroup(contactId, groupId){
      contactGroup.removeContactFromGroup(contactId, groupId)
      .then(statDelet =>{
        view.print(statDelet)
      })
      .catch(err=>{view.print(err)})
  }
  static show(){
    contactGroup.getList()
    .then(listContact=>{
        view.print(listContact)
    })
    .catch(err=>{view.print(err)})
  }
}

module.exports = Controller

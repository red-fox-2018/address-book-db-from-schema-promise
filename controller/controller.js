const Contact = require('../model/contact')
const Group = require('../model/group')
const View = require('../view/view')

class Controller{
    static listContact(){
        Contact.listContact()
        .then(result =>{
            View.methodView(result)
        })
        .catch(err =>{
            View.methodView(err)
        })
    }

    static addContact(name,company,phoneNumber,email){
        let addContact = new Contact(name,company,phoneNumber,email)
        addContact.addContact()
        .then(result =>{
            View.methodView(result)
        })
        .catch(err =>{
            View.methodView(err)
        })
    }

    static updateContact(id,kolom,value){
        Contact.updateContact(id,kolom,value)
        .then(result =>{
            View.methodView(result)
        })
        .catch(err =>{
            View.methodView(err)
        })
    }

    static deleteContact(id){
        Contact.deleteContact(id)
        .then(result =>{
            View.methodView(result)
        })
        .catch(err =>{
            View.methodView(err)
        })
    }

    static listGroup(){
        Group.listGroup()
        .then(result =>{
            View.methodView(result)
        })
        .catch(err =>{
            View.methodView(err)
        })            
    }

    addGroup(name){
        let addGroup = new Group(name)
        addGroup.addGroup()
        .then(result =>{
            View.methodView(result)
        })
        .catch(err =>{
            View.methodView(err)
        })
    }

    static updateGroup(id,kolom,value){
        Group.updateGroup(id,kolom,value)
        .then(result =>{
            View.methodView(result)
        })
        .catch(err =>{
            View.methodView(err)
        })
    }

    static deleteGroup(id){
        Group.deleteGroup(id)
        .then(result =>{
            View.methodView(result)
        })
        .catch(err =>{
            View.methodView(err)
        })
    }

    static assignContactGroup(contactId, groupsId){
        Group.assignContactGroup(contactId,groupsId)
        .then(result =>{
            View.methodView(result)
        })
        .catch(err =>{
            View.methodView(err)
        })
    }
}

module.exports = Controller
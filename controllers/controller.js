const Contact = require('../models/contact')
const Group = require('../models/group')
const ContactGroup = require('../models/contact-group')
const View = require('../views/view')


class Controller {

    static createContact(name, company, phone, email){
        Contact.create(name, company, phone, email)
        .then(data =>{
            View.print(data)
        })
        .catch(error =>{
            View.print(error)
        })    

    }

    static updateContact(id, param, newValue){
        Contact.update(id, param, newValue)
        .then(data =>{
            View.print(data)
        })
        .catch(error =>{
            View.print(error)
        })    
        
    }

    static deleteContact(name){
        Contact.delete(name)
        .then(data =>{
            View.print(data)
        })
        .catch(error =>{
            View.print(error)
        })
    }

    static createGroup(name){
        Group.create(name)
        .then(data =>{
            View.print(data)
        })
        .catch(error =>{
            View.print(error)
        })
    }

    static updateGroup(id, param, newValue){
        Group.update(id, param, newValue)
        .then(data =>{
            View.print(data)
        })
        .catch(error =>{
            View.print(error)
        })
    }

    static deleteGroup(name){
        Group.delete(name)
        .then(data =>{
            View.print(data)
        })
        .catch(error =>{
            View.print(error)
        })
    }

    static assignContactToGroup(contactName, groupName){
        ContactGroup.assign(contactName, groupName)
        .then(data =>{
            View.print(data)
        })
        .catch(error =>{
            View.print(error)
        })
    }

    static showContact(){
        Contact.show()
        .then(data =>{
            View.print(data)
        })
        .catch(error =>{
            View.print(error)
        })
    }

}

module.exports = Controller
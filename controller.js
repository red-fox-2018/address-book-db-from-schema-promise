const Contact= require('./models/contact')
const Group = require('./models/group')
const View = require('./view')


class Controller{
    static saveContact(name,company,telp,email){
        let contact= new Contact(name, company, telp, email)
        contact.save().then(message=>{
            View.show(message)
        })
        .catch(err => {
            View.show(err)
        })
    }
 
    static updateContact(property,value,id){
        let contact = new Contact()
        contact.update(property, value, id)
        .then(message=>{
            View.show(message)
        })
        .catch(err => {
            View.show(err)
        })
    }   

    static deleteContact(deleteId) {
        let contact = new Contact()
        contact.delete(deleteId)
        .then(message =>{
            View.show(message)

        }) 
        .catch(err => {
            View.show(err)
        })
    }
    static saveGroup(name){
        let group = new Group(name)
        group.save()
        .then(message => {
            View.show(message)
        })
        .catch(err => {
            View.show(err)
        })
    }
    static updateGroup(groupsValue,groupsId){
        let group = new Group()
        group.update(groupsValue,groupsId).then(message=>{
            View.show(message)
        })
        .catch(err => {
            View.show(err)
        }) 
    }
    static deleteGroup(deleteId) {
        let group = new Group()
        group.delete(deleteId).then(message=>{
            View.show(message)
        })
        .catch(err => {
            View.show(err)
        })
    }
    static assign(contactId,groupsId){
        let group = new Group()
        group.assign(contactId, groupsId)
        .then(message=>{
            View.show(message)
        })
        .catch(err => {
            View.show(err)
        })
    }
    static showContact(){
        let contact = new Contact()
        contact.showContact()
        .then(message=>{
            View.show(message)
        })
        .catch(err => {
            View.show(err)
        })
    }
    static showGroup(){
        let group = new Group()
        group.showGroup()
        .then(message => {
            View.show(message)
        })
        .catch(err=>{
            View.show(err)
        })
    }
    
}
module.exports = Controller
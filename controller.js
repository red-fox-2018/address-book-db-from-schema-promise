const Model = require('./model')
const View = require('./view')
const Contact = require('./contact')
const Group = require('./group')

class Controller{

    static help(){
        View.help()
    }

    static add(command2, company, phone, email, name, callback){
        if(command2 == 'contact'){
            Contact.addDB(company, phone, email, name)
            .then(function(obj){
                View.addContactMessageAllert(obj.data, obj.status)
            })
            .catch(function(err){
                View.addContactMessageAllert(err)
            })
        }
    }

    static show(){
        Contact.showDB()
        .then(function(value){
            View.showContactInfo(value)
        })
        .catch(function(value){
            View.showContactInfo(value)
        })
    }

    static delete(command2, id){
        if(command2 == 'contact'){
            Model.deleteContact(id, function(status){
                View.deleteContactMessageAllert(status)
            })
        }
        else if(command2 == 'group'){
            Model.deleteGroup(id, function(status){
                View.deleteGroupMessageAllert(status)
            })
        }
    }

    static update(command2, command3, id, update){
        if(command2 == 'contact'){
            Contact.updateDB(command3, id, update)
            .then(function(status){
                View.updateContactMessageAllert(status)
            })
            .catch(function(status){
                View.updateContactMessageAllert(status)
            })
        }
    }

    static create(groupName){
        Group.createDB(groupName)
        .then(function(status){
            View.createGroupAllert(status)
        })
        .catch(function(status){
            View.createGroupAllert(status)
        })
    }

    static addToGroup(contactID, groupID){
        Model.addToGroup(contactID, groupID, function(Cname, Gname, status){
            View.addToGroupAllert(Cname, Gname, status)
        })
    }

    static showMemberGroup(groupName){
        Group.showMemberGroup(groupName)
        .then(function(value){
            View.showGroupMemberInfo(value)
        })
        .catch(function(value){
            View.showGroupMemberInfo(value)
        })
    }
}

module.exports = Controller
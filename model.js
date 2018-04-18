const Contact = require('./contact')
const Group = require('./group')


class Model {

    static addContact(company, phone, email, name, callback){
        Contact.addDB(company, phone, email, name)
    }

    static showContact(callback){
        Contact.showDB(function(contactGroupData){
            callback(contactGroupData)
        })
    }

    static deleteContact(id, callback){
        Contact.deleteDB(id, function(status){
            callback(status)
        })
    }

    static updateContact(command3, id, update, callback){
        Contact.updateDB(command3, id, update, function(status){
            callback(status)
        })
    }

    static createGroup(groupName, callback){
        Group.createDB(groupName, function(status){
            callback(status)
        })
    }

    static deleteGroup(id, callback){
        Group.deleteDB(id, function(status){
            callback(status)
        })
    }

    static addToGroup(contactID, groupID, callback){
        Group.addToGroup(contactID, groupID, function(Cname, Gname, status){
            callback(Cname, Gname, status)
        })
    }

    static showMemberGroup(groupName, callback){
        Group.showMemberGroup(groupName, function(dataMember){
            callback(dataMember)
        })
    }
}



module.exports = Model
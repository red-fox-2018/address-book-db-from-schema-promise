import { resolve } from 'dns';

const ContactGroup = require('../model/contact-group')
const View = require('../View/view')

class GroupContactController {

    static addContactGroup(idContact,idGroup) {

        ContactGroup.create(idContact,idGroup)
        .then(resolve => {
            View.display(resolve)
        })
        .catch(reject => {
            View.display(reject)
        })
    }

    static updateContactGroup(id,idContact,idGroup) {

        ContactGroup.update(id,idContact,idGroup)
        .then(resolve =>{
            View.display(resolve)
        })
        .catch(reject =>{
            View.display(reject)
        }) 
    }

    static deleteContactGroup(id) {

        ContactGroup.delete(id)
        .then(resolve =>{
            View.display(resolve)
        })
        .catch(reject =>{
            View.display(reject)
        })
    }
}

module.exports = GroupContactController
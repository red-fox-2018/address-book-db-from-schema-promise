const ModelContact = require('../models/modelContact').ModelContact
const ViewContact = require('../views/viewContact').ViewContact

class ControllerContact{
    static addContact(objAddContact){
        // console.log(objAddContact)
        let contact = new ModelContact(objAddContact)

        ModelContact.addContact(contact)
        // .then(() => {
        //     let status = true
        //     ViewContact.displayResultAddContact(status)
        // })
        // .catch(err => {
        //     let status = false
        //     ViewContact.displayResultAddContact(status)
        // })

    }
}

module.exports = {
    ControllerContact
}
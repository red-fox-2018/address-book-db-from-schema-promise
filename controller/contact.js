const Contact = require('../model/contact')
const View = require('../View/view')

class ContactController {

    static showContact() {
        Contact.show()
        .then(resolve =>{
            View.display(resolve)
        })
        .catch(reject =>{
            View.display(reject)
        })
    }

    static addContact(name, company, phone, email) {

        Contact.create(name, company, phone, email)
        .then(resolve =>{
            View.display(resolve)
        })
        .catch(reject =>{
            View.display(reject)
        })
    }

    static updateContact(id,name, company, phone, email) {

        Contact.update(id,name,company,phone,email)
        .then(resolve =>{
            View.display(resolve)
        })
        .catch(reject => {
            View.display(reject)
        })
    }

    static deleteContact(id) {

        Contact.delete(id)
        .then(resolve =>{
            View.display(resolve)
        })
        .catch(reject =>{
            View.display(reject)
        })
    }
}

module.exports = ContactController
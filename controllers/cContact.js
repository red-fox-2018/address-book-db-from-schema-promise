var Contact = require('../models/contact.js')
var ViewContact = require('../views/vContact.js')

class ControllerContact {

  static show() {
    Contact.show()
    .then((contactList) => {
      ViewContact.showContact(contactList)
    })
    .catch((err) => {
      ViewContact.showContact(err)
    })
  }

  static add(objContact) {
    Contact.add(objContact)
    .then((newContact) => {
      ViewContact.addContact(newContact)
    })
    .catch((err) => {
      ViewContact.showContact(err)
    })
  }

  static update(set, setValue, where, whereValue) {
    Contact.update(set, setValue, where, whereValue)
    .then((updated) => {
      ViewContact.updateContact(updated)
    })
    .catch((err) => {
      ViewContact.updateContact(err)
    })
  }

  static delete(contactId) {
    Contact.delete(contactId)
    .then((deleted) => {
      ViewContact.deleteContact(deleted)
    })
    .catch((err) => {
      ViewContact.deleteContact(err)
    })
  }

}

module.exports = ControllerContact

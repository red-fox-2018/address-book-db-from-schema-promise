const Contact = require('./contact');
const Group = require('./group');
const View = require('./view')

class Controller {
  static showContact() {
    Contact.show()
    .then(output => {
      View.display(output);
    })
    .catch(err => {
      View.display(err);
      
    })
  }
  static addContact(name, perusahaan, no_telp, email) {
    Contact.add(name, perusahaan, no_telp, email)
    .then(output => {
      View.display(output);
    })
    .catch(err => {
      View.display(err);
      
    })
  }
  static deleteContact(contactId) {
    Contact.delete(contactId)
    .then(output => {
      View.display(output);
    })
    .catch(err => {
      View.display(err);
      
    })
  }
  static updateContact(contactId, column, newData) {
    Contact.update(contactId, column, newData)
    .then(output => {
      View.display(output);
    })
    .catch(err => {
      View.display(err);
      
    })
  }
  static showGroup() {
    Group.show()
    .then(output => {
      View.display(output);
    })
    .catch(err => {
      View.display(err);
      
    })
  }
  static addGroup(name) {
    Group.add(name)
    .then(output => {
      View.display(output);
    })
    .catch(err => {
      View.display(err);
      
    })
  }
  static deleteGroup(groupId) {
    Group.delete(groupId)
    .then(output => {
      View.display(output);
    })
    .catch(err => {
      View.display(err);
      
    })
  }
  static updateGroup(groupId, column, newData) {
    Group.update(groupId, column, newData)
    .then(output => {
      View.display(output);
    })
    .catch(err => {
      View.display(err);
      
    })
  }
  static assignMember(groupId, contactId) {
    Group.assign(groupId, contactId)
    .then(output => {
      View.display(output);
    })
    .catch(err => {
      View.display(err);
      
    })
  }
}

module.exports = Controller;
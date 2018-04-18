const View = require('../views/view');
const ModelContact = require('../models/contact');
const ModelGroup = require('../models/group');
const ModelContactGroup = require('../models/contact-group');

class Controller {
  constructor() {

  }

  static addContact(content){

    ModelContact.add_contact(content)

    .then((success) => {
      View.show(success)
    })
    .catch((err) => {
      View.show(err)
    })

  }

  static updateContact(content){

    ModelContact.update_contact(content[0], content[1], content[2])
    .then((success) => {
      View.show(success)
    })
    .catch((err) => {
      View.show(err)
    })

  }

  static deleteContact(id){

    ModelContact.delete_contact(id)

    .then((success) => {
      View.show(success)
    })
    .catch((err) => {
      View.show(err)
    })

  }

  static showContact(id){

    ModelContact.show_contact(id)

    .then((data) => {
      View.show(data)
    })
    .catch((err) => {
      View.show(err)
    })

  }

  static addGroup(content){

    ModelGroup.add_group(content[0])

    .then((success) => {
      View.show(success)
    })
    .catch((err) => {
      View.show(err)
    })

  }

  static updateGroup(content){

    ModelGroup.update_group(content[0], content[1])

    .then((success) => {
      View.show(success)
    })
    .catch((err) => {
      View.show(err)
    })

  }

  static deleteGroup(id){

    ModelGroup.delete_group(id)

    .then((success) => {
      View.show(success)
    })
    .catch((err) => {
      View.show(err)
    })

  }

  static showGroup(id){

    ModelGroup.show_group(id)

    .then((data) => {
      View.show(data)
    })
    .catch((err) => {
      View.show(err)
    })

  }

  static addContactToGroup(content){

    ModelContactGroup.addNewContact(content)

    .then((data) => {
      View.show(data)
    })
    .catch((err) => {
      View.show(err)
    })

  }

  static help(){
    View.help()
  }

}

module.exports = Controller;

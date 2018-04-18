"use strict"
const Model = require('../models/contact-group');
const View = require('../views/view');

class Controller {
  static assignContact(groupName, contactName) {
    Model.addContact(groupName, contactName)
      .then(statusMessage => {
        View.showMessage(statusMessage);
      })
      .catch(err => {
        View.showErrorMessage(err);
      })
  }

  static deleteGroupId(id) {
    Model.deleteGroup(id)
      .then(statusMessage => {
        View.showMessage(statusMessage);
      })
      .catch(err => {
        View.showErrorMessage(err);
      })
  }
}

module.exports = Controller;
"use strict"
const Model = require('../models/contact');
const View = require('../views/view');

class Controller {
  static dataContact() {
    Model.getData()
    .then(data => {
      View.showMessage(data);
    })
    .catch(err => {
      View.showErrorMessage(err);
    })
  }

  static saveContact(name, email, phone, company) {
    Model.save(name, company, email, phone)
    .then(statusMessage => {
      View.showMessage(statusMessage);
    })
    .catch(err => {
      View.showErrorMessage(err);
    })
  }

  static updateContact(column, id, value) {
    Model.update(column, value, id)
    .then(statusMessage => {
      View.showMessage(statusMessage);
    })
    .catch(err => {
      View.showErrorMessage(err);
    })
  }

  static deleteContact(id) {
    Model.delete(id)
    .then(statusMessage => {
      View.showMessage(statusMessage);
    })
    .catch(err => {
      View.showErrorMessage(err);
    })
  }
}

module.exports = Controller;
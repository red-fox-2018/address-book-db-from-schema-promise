"use strict"
const Model = require('../models/group');
const View = require('../views/view');

class Controller {
  static dataGroup() {
    Model.getData()
      .then(data => {
        View.showMessage(data);
      })
      .catch(err => {
        View.showErrorMessage(err);
      })
  }

  static saveGroup(name) {
    Model.save(name)
      .then(data => {
        View.showMessage(data);
      })
      .catch(err => {
        View.showErrorMessage(err);
      })
  }

  static updateGroup(id, value) {
    Model.update(id, value)
      .then(statusMessage => {
        View.showMessage(statusMessage);
      })
      .catch(err => {
        View.showErrorMessage(err);
      })
  }

  static deleteGroup(id) {
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
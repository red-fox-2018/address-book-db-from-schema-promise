var Group = require('../models/group.js')
var ViewGroup = require('../views/vGroup.js')

class ControllerGroup {

  static show() {
    Group.show()
    .then((groupList) => {
      ViewGroup.showGroup(groupList)
    })
    .catch((err) => {
      ViewGroup.showGroup(err)
    })
  }

  static add(groupName) {
    Group.add(groupName)
    .then((newGroup) => {
      ViewGroup.addGroup(newGroup)
    })
    .catch((err) => {
      ViewGroup.addGroup(err)
    })
  }

  static update(value, groupId) {
    Group.update(value, groupId)
    .then((updated) => {
      ViewGroup.updateGroup(updated)
    })
    .catch((err) => {
      ViewGroup.updateGroup(err)
    })
  }

  static delete(groupId) {
    Group.delete(groupId)
    .then((deleted) => {
      ViewGroup.deleteGroup(deleted)
    })
    .catch((err) => {
      ViewGroup.deleteGroup(err)
    })
  }

}

module.exports = ControllerGroup

var ContactGroup = require('../models/contact-group.js')
var ViewGC = require('../views/vGC.js')

class ControllerContactGroup {

  static show() {
    ContactGroup.show()
    .then((gcList) => {
      ViewGC.showGC(gcList)
    })
    .catch((err) => {
      ViewGC.showGC(err)
    })
  }

  static add(obj) {
    ContactGroup.add(obj)
    .then((newGC) => {
      ViewGC.addGC(newGC)
    })
    .catch((err) => {
      ViewGC.addGC(err)
    })
  }

  static delete(GCId) {
    ContactGroup.delete(GCId)
    .then((deleted) => {
      ViewGC.deleteGC(deleted)
    })
    .catch((err) => {
      ViewGC.deleteGC(err)
    })
  }

}

module.exports = ControllerContactGroup

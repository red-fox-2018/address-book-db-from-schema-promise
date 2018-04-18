const Model = require('../models/contact-group');
const View = require('../views/contact-group');

class CGroupController {

  static listContactGroup(){
    Model.findAll()
    .then(function(data){
      View.showData(data)
    })
    .catch(function(err){
      View.showErr(err)
    })
  }

  static addContactGroup(newContact){
    Model.create(newContact)
    .then(function(groupNcontact){
      View.succesAdd(groupNcontact)
    })
    .catch(function(err){
      View.showErr(err)
    })
  }

  static deleteContactGroup(dataCGroup){
    Model.destroy(dataCGroup, function(err, contact, group) {

      if(err = "not found"){
        View.showErrDelete(err, contact, group)
      }else if(err){
        View.showErr(err)
      }else{
        View.succesDelete()
      }
    })
  }

}

module.exports = CGroupController;

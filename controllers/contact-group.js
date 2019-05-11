/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/
/*jshint -W138*/


const ContactGroupModel = require('../models/contact-group');
const View = require('../views/view');

class ContactGroupController {

   static addGroupContact(contactName, groupName) {
      ContactGroupModel.add(contactName, groupName)
         .then(dis => {
            View.display(dis);
         }).catch((err) => {
            View.display(err);
         });
   }

   static updateGroupContact(contactName, groupName, idContactGroup) {
      ContactGroupModel.update(contactName, groupName, idContactGroup)
         .then(dis => {
            View.display(dis);
         }).catch((err) => {
            View.display(err);
         });
   }

   static deleteGroupContact(contact_groups_id) {
      ContactGroupModel.delete(contact_groups_id).then(dis => {
         View.display(dis);
      }).catch((err) => {
         View.display(err);
      });
   }
}
module.exports = ContactGroupController;

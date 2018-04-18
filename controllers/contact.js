/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/
/*jshint -W138*/


const ContactModel = require('../models/contact');
const View = require('../views/view');

class ContactController {

   static addContact(name, company, phone_number, email) {
      ContactModel.add(name, company, phone_number, email)
         .then(dis => {
            View.display(dis);
         }).catch((err) => {
            View.display(err);
         });
   }

   static updateContact(column, input, contact_id) {
      ContactModel.update(column, input, contact_id)
         .then(dis => {
            View.display(dis);
         }).catch((err) => {
            View.display(err);
         });
   }

   static findById(contactName) {
      ContactModel.findById(contactName).then(dis => {
         View.displayShowSearch(dis);
      }).catch((err) => {
         View.display(err);
      });
   }

   static deleteContact(contact_id) {
      ContactModel.delete(contact_id)
         .then(dis => {
            View.display(dis);
         }).catch((err) => {
            View.display(err);
         });
   }

   static showContact() {
      ContactModel.show().then(dis => {
         View.displayShowContact(dis);
      }).catch((err) => {
         View.display(err);
      });
   }
}

module.exports = ContactController;

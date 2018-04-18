/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/
/*jshint -W138*/


const ContactController = require('./controllers/contact.js');
const GroupController = require('./controllers/group.js');
const ContactGroupController = require('./controllers/contact-group.js');
const argv = process.argv;

switch (argv[2]) {

   //===Contact
   case 'addContact':
      ContactController.addContact(argv[3], argv[4], argv[5], argv[6]);
      break;
   case 'updateContact':
      ContactController.updateContact(argv[3], argv[4], argv[5]);
      break;
   case 'deleteContact':
      ContactController.deleteContact(argv[3]);
      break;
   case 'showContact':
      ContactController.showContact();
      break;
   case 'search':
      ContactController.findById(argv[3]);
      break;


      //===Group
   case 'addGroup':
      GroupController.addGroup(argv[3]);
      break;
   case 'updateGroup':
      GroupController.updateGroup(argv[3], argv[4], argv[5]);
      break;
   case 'deleteGroup':
      GroupController.deleteGroup(argv[3]);
      break;
   case 'showGroup':
      GroupController.showGroup();
      break;

      //===GroupContact
   case 'addGroupContact':
      ContactGroupController.addGroupContact(argv[3], argv[4]);
      break;
   case 'updateGroupContact':
      ContactGroupController.updateGroupContact(argv[3], argv[4], argv[5]);
      break;
   case 'deleteGroupContact':
      ContactGroupController.deleteGroupContact(argv[3]);
      break;
}

const ControllerContact = require('./controllers/cContact.js')
const ControllerGroup = require('./controllers/cGroup.js')
const ControllerContactGroup = require('./controllers/cContactGroup.js')
var command = process.argv.slice(2)

switch(command[0]) {
  case 'showContact':
  ControllerContact.show()
  break;
  case 'addContact':
  ControllerContact.add({name: command[1], company: command[2], phone_number: command[3], email: command[4]});
  break;
  case 'updateContact':
  ControllerContact.update(command[1], command[2], command[3], command[4])
  break;
  case 'deleteContact':
  ControllerContact.delete(command[1]);
  break;
  case 'showGroup':
  ControllerGroup.show();
  break;
  case 'addGroup':
  ControllerGroup.add(command[1]);
  break;
  case 'updateGroup':
  ControllerGroup.update(command[1], command[2])
  break;
  case 'deleteGroup':
  ControllerGroup.delete(command[1]);
  break;
  case 'showGC':
  ControllerContactGroup.show();
  break;
  case 'addGC':
  ControllerContactGroup.add({contactId: command[1], groupId: command[2]});
  break;
  case 'deleteGC':
  ControllerContactGroup.delete(command[1]);
  break;
}

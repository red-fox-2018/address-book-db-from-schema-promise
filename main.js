const Controller = require('./controller')

const input = process.argv.splice(2);
const command = input[0];

switch (command) {
  case 'showContact':
    Controller.showContact()
    break;
  case 'addContact':
    var name = input[1];
    var perusahaan = input[2];
    var no_telp = input[3];
    var email = input[4]
    Controller.addContact(name, perusahaan, no_telp, email);
    break;
  case 'deleteContact':
    var contactId = input[1]
    Controller.deleteContact(contactId);
    break;
  case 'updateContact':
    contactId = input[3];
    var column = input[1];
    var newData = input[2]
    Controller.updateContact(contactId, column, newData);
    break;
  case 'showGroup':
    Controller.showGroup()
    break;
  case 'addGroup':
    name = input[1];
    Controller.addGroup(name);
    break;
  case 'deleteGroup':
    groupId = input[1]
    Controller.deleteGroup(groupId);
    break;
  case 'updateGroup':
    column = input[1];
    newData = input[2];
    groupId = input[3];
    Controller.updateGroup(contactId, column, newData);
    break;
  case 'assignMember':
    groupId = input[1];
    contactId = input[2];
    Controller.assignMember(groupId, contactId);
    break;
  default:
    result = 'Please input a correct command';
    break;
}

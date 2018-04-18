"use strict"
const Contact = require('./controllers/contact');
const Group = require('./controllers/group');
const ContactGroup = require('./controllers/contact-group');
const commands = process.argv;

switch (commands[2]) {
  case 'showData':
    let tableName = commands[3];

    if (tableName === 'Contacts') {
      Contact.dataContact();
    } else if (tableName === 'Groups') {
      Group.dataGroup();
    }
    break;
  case 'saveContact':
    let company = commands.slice(6).join(' ');

    Contact.saveContact(commands[3], commands[4], commands[5], company);
    break;
  case 'updateContact':
    let value = commands.slice(5).join(' ');

    Contact.updateContact(commands[3], commands[4], value);
    break;
  case 'deleteContact':
    Contact.deleteContact(commands[3]);
    break;
  case 'createGroup':
    let groupName = commands.slice(3).join(' ');

    Group.saveGroup(groupName);
    break;
  case 'updateGroup':
    let name = commands.slice(4).join(' ');

    Group.updateGroup(commands[3], name);
    break;
  case 'deleteGroup':
    ContactGroup.deleteGroupId(commands[3]);
    Group.deleteGroup(commands[3]);
    break;
  case 'assignContact':
    let contactName = commands.slice(4).join(' ');
    ContactGroup.assignContact(commands[3], contactName);
    break;
  default:
    break;
}
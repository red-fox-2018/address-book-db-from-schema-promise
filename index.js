/**
 * @author Iswanul Umam
 */
const { ContactsController, GroupsController } = require('./controllers');

let command = process.argv[2];
let values = process.argv.slice(3);

switch(command) {
  case 'contact:list':
    ContactsController.showList();
    break;
  case 'contact:find':
    ContactsController.showById(values);
    break;
  case 'contact:add':
    ContactsController.add(values);
    break;
  case 'contact:delete': 
    ContactsController.deleteOne(values);
    break;
  case 'group:list' :    
    GroupsController.showList();
    break;
  case 'group:find':
    GroupsController.showById(values);
    break;
  case 'group:add':
    GroupsController.add(values);
    break;
  case 'group:delete': 
    GroupsController.deleteOne(values);
    break;
  case 'group:invite': 
    GroupsController.inviteContact(values);
    break;
  default:
    console.log('Please enter correct command!');
    break;
}
const argv = process.argv
const command = argv[2]
const content = argv.slice(3)
const Controller = require('./controllers/controller');

switch (command) {
  case 'addContact':{return Controller.addContact(content)}
  case 'updateContact': {return Controller.updateContact(content)}
  case 'deleteContact': {return Controller.deleteContact(content)}
  case 'showContact': {return Controller.showContact(content)}
  case 'addGroup': {return Controller.addGroup(content)}
  case 'updateGroup': {return Controller.updateGroup(content)}
  case 'deleteGroup': {return Controller.deleteGroup(content)}
  case 'showGroup': {return Controller.showGroup(content)}
  case 'asignContactGroup': {return Controller.addContactToGroup(content)}

  default:{return Controller.help()}

}

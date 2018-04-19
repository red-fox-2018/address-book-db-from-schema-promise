const Controller = require('./controller/controller');

const argv = process.argv
let command=argv[2]
let content= argv.slice(3)

switch (command) {
  case 'addContact':{return Controller.addContact(content)}
  case 'addGroup':{return Controller.addGroup(content)}
  case 'addtoGroup':{return Controller.addtoGroup(content)}
  case 'nameDetail':{return Controller.nameDetail(content)}
  case 'groupDetail':{return Controller.groupDetail(content)}
  case 'deleteGroup':{return Controller.deleteGroup(content)}
  case 'groupNameDetail':{return Controller.groupNameDetail(command)}
  case 'updateContact': {return Controller.updateContact (content)}

  default:'wrong command'

}

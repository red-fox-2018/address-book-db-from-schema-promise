const command = process.argv.slice(2)
const Controller = require('./controllers/controller')

switch (command[0]) {
    case 'create':
        if(command[1] == 'contact'){
            Controller.createContact(command[2], command[3], command[4], command[5])
        } else {
            Controller.createGroup(command[2])
        }
    break;

    case 'update':
        if(command[1] == 'contact'){
            Controller.updateContact(command[2], command[3], command[4])
        } else {
            Controller.updateGroup(command[2], command[3], command[4])
        }
    break;

    case 'delete':
        if(command[1] == 'contact'){
            Controller.deleteContact(command[2])
        } else {
            Controller.deleteGroup(command[2])
        }
    break;
    
    case 'assign':
        Controller.assignContactToGroup(command[1], command[2])
    break;

    case 'show':
        if(command[1] == 'contact'){
            Controller.showContact()
        }
    break;
}
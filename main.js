const command = process.argv.slice(2)
const ControllerContact = require('./controllers/controllerContact').ControllerContact

switch (command[0]) {
    case 'addContact':
        let objAddContact = {
            name:command[1],
            company:command[2],
            telephonNumber:command[3],
            email:command[4]
        }
        // console.log(objAddContact)
        ControllerContact.addContact(objAddContact)
        break;

    default:
        break;
}
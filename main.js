const ContactController = require('./controller/contact')
const GroupController = require('./controller/group')
const ContactGroupController =require('./controller/contact-group')
const argv = process.argv

switch (argv[2]) {
    case 'addContact':
        ContactController.addContact(argv[3],argv[4],argv[5],argv[6])
        break;
    case 'updateContact':
        ContactController.updateContact(argv[3],argv[4],argv[5],argv[6],argv[7])
        break;
    case 'deleteContact':
        ContactController.deleteContact(argv[3])
        break;
    case 'showContact':
        ContactController.showContact()
        break;
    case 'addGroup':
        GroupController.addGroup(argv[3])
        break;
    case 'updateGroup':
        GroupController.updateGroup(argv[3],argv[4])
        break;
    case 'deleteGroup':
        GroupController.deleteGroup(argv[3])
        break;
    case 'addContactGroup':
        ContactGroupController.addContactGroup(argv[3],argv[4])
        break;
    case 'updateContactGroup':
        ContactGroupController.updateContactGroup(argv[3],argv[4],argv[5])
        break;
    case 'deleteContactGroup':
        ContactGroupController.deleteContactGroup(argv[3])
        break;
    default:
        break;
}
const list = process.argv
let command = list[2]
let property = list[3]
let value = list[4]
let id = list[5]

const Controller = require('./controller')

if (list.length == 2) {
    Controller.call('help')
}
switch (command) {
    case 'saveContact':
        let name = list[3]
        let company = list[4]
        let telp = list[5]
        let email = list[6]
        Controller.saveContact(name, company, telp, email)
        break;
    case 'deleteContact':
        var deleteId = list[3]
        Controller.deleteContact(deleteId)
        break;
    case 'updateContact':
        Controller.updateContact(list[3], list[4], list[5])
        break;
    case 'saveGroup':
        Controller.saveGroup(list[3])
        break;
    case 'deleteGroup':
        var deleteId = list[3]
        Controller.deleteGroup(deleteId)
        break;
    case 'updateGroup':
        Controller.updateGroup(list[3], list[4])
        break;
    case 'assign':
        Controller.assign(list[3], list[4])
        break;
    case 'show':
        if (list[3] == 'contact') {
            Controller.showContact()
        }
        else if (list[3] == 'group') {
            Controller.showGroup()
        }
        break;
    default:
        break;
}
const Controller = require('./controller/controller')

let input = process.argv.slice(2)

switch(input[0]){
    case "listContact" :
    Controller.listContact()
    break
    case "addContact" :
    Controller.addContact(input[1],input[2],input[3],input[4])
    break
    case "updateContact":
    Controller.updateContact(input[1],input[2],input[3])
    break
    case "deleteContact":
    Controller.deleteContact(input[1])
    break
    case "listGroup":
    Controller.listGroup()
    break
    case "addGroup":
    Controller.addGroup(input[1])
    break
    case "updateGroup":
    Controller.updateGroup(input[1],input[2],input[3])
    break
    case "deleteGroup":
    Controller.deleteGroup(input[1])
    break
    case "listContactGroup":
    Controller.listContactGroup()
    break
    case "assignContactGroup":
    Controller.assignContactGroup(input[1])
    break
    case "deleteContactGroup":
    Controller.deleteContactGroup(input[1])
    break
    default:
    "Wrong Command"
    break
}

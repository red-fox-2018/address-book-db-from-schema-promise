const Controller = require('./Controller')

let apply = process.argv.slice(2)
let command1 = apply[0]
let command2 = apply[1]
if(command1 === 'help'){
    Controller.help()
}
else if(command1 === 'add' && command2 === 'contact'){
    let company = apply[2]
    let phone = apply[3]
    let email = apply[4]
    let step1 = apply.slice(5)
    let name = step1.join(' ') 
    
    Controller.add(command2, company, phone, email, name)
}
else if(command1 === 'show' && command2 === 'contact'){
    Controller.show()
}
else if(command1 === 'delete' && command2 === 'contact'){
    let id = apply[2]
    Controller.delete(command2, id)
}
else if(command1 === 'update' && command2 === 'contact'){
    let command3 = apply[2]
    let id = apply[3]
    let step1 = apply.slice(4)
    let update = null
    if(step1.length > 1){
        update = step1.join(' ')
    }
    else{
        update = step1
    }
    Controller.update(command2, command3, id, update)
}
else if(command1 === 'create' && command2 === 'group'){
    let step1 = apply.slice(2)
    let groupName = null
    if(step1.length > 1){
        groupName = step1.join(' ')
    }
    else{
        groupName = step1.join()
    }
    Controller.create(groupName)
}
else if(command1 === 'delete' && command2 === 'group'){
    let id = apply[2]
    Controller.delete(command2, id)
}
else if(command1 === 'add:to' && command2 === 'group'){
    let contactID = apply[2]
    let groupID = apply[3]
    Controller.addToGroup(contactID, groupID)
}
else if(command1 === 'show' && command2 === 'group:member'){
    let step1 = apply.slice(2)
    let groupName = step1.join(' ')
    Controller.showMemberGroup(groupName) 
}

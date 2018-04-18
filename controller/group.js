import { resolve } from 'dns';

const Group = require('../model/group')
const View = require('../View/view')

class GroupController {

    static addGroup(name) {

        Group.create(name)
        .then(resolve =>{
            View.display(resolve)
        })
        .catch(reject =>{
            View.display(reject)
        })
    }

    static updateGroup(id,name) {

        Group.update(id,name)
        .then(resolve =>{
            View.display(resolve)
        })
        .catch(reject =>{
            View.display(reject)
        }) 
    }

    static deleteGroup(id) {

        Group.delete(id)
        .then(resolve =>{
            View.display(resolve)
        })
        .catch(reject =>{
            View.display(reject)
        })
    }
}

module.exports = GroupController
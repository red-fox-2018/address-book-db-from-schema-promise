const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/address_book.db');
const Process = require('../helpers/helper');

class Group {
  constructor(name) {
    this.groupName = name
  }
}

class ModelGroup {
  constructor() {

  }

  static add_group(content){

    const new_group = new Group(content)

    return new Promise((resolve, reject) => {

      if (content != undefined) {

        db.run(`INSERT INTO groups(name)
        VALUES("${new_group.groupName}")`, (err, success) => {

          if (err) {
            reject(err)
          } else {
            resolve(`success add "${new_group.groupName}" to groups`)
          }

        })

      } else {

        return err

      }

    })

    .then((success) => {
      return success
    })
    .catch((err) => {
      return `\n error: please input valid command! \n
              ex:
              -----> ["node main.js addGroup {Group_name}"]\n`
    })

  }

  static update_group(id, content){

    return new Promise((resolve, reject) => {

      if (id != undefined || content != undefined) {

        db.run(`UPDATE groups
          SET name = "${content}"
          WHERE id = ${id}`, (err, success) => {

            if (err) {
              reject(err)
            } else {
              resolve(`success update ${id}'s name to ${content}`)
            }

          })

      } else {

        return err

      }

    })

    .then((success) => {
      return success
    })
    .catch((err) => {
      return `\n error: please input valid command! \n
              ex:
              -----> ["node main.js updateGroup {Group_id} {change_value}"]\n`
    })

  }

  static delete_group(id, cb){

    return new Promise(function(resolve, reject) {

      db.run(`DELETE FROM groups
              WHERE id = ${id}`, (err, success) => {

        if (err) {
          reject(err)
        } else {
          resolve(success)
        }

    })

  })

  .then((success) => {

    return new Promise(function(resolve, reject) {

      db.all(`DELETE FROM contact_group WHERE id_group = ${id}`, (err, deleted) => {

        if (err) {
          reject(err)
        } else {
          resolve(`group has been deleted...`)
        }

      })

    })

  })

  .catch((err) => {
    return `\n error: please input valid command! \n
            ex:
            -----> ["node main.js deleteGroup {Group_id}"]\n`
  })

}

  static show_group(id){

    return new Promise((resolve, reject) => {

      db.get(`SELECT * FROM groups
        WHERE id = ${id}`, (err, data) => {

        if (err) {
          reject(err)
        } else {
          resolve(data)
        }

      })

    })

    .then((data) => {

      if (data != undefined) {

        return data

      } else {

        return `Group with id "${id}" is not exists...`

      }

    })
    .catch((err) => {
      return `\n error: please input valid command! \n
              ex:
              -----> ["node main.js showGroup {Group_id}"]\n`
    })

  }

}

module.exports = ModelGroup;


const { ContactsModel, GroupsModel } = require('./../models');
const View = require('./../views/view');

class GroupsController {

  static showList() {
    GroupsModel.getAll()
      .then(result => {
        View.showList(result);
      }).catch(err => {
        View.showString(`Gagal memasukan list!`);
      })
  }
  
  static showById(values) {
    let id = values[0];
    GroupsModel.findById(id)
      .then(result => {
        View.showOne(result);
      }).catch(err => {
        View.showString(`Gagal mendapatkan data!`);
      })
  }
  
  static add(values) {
    // @ name, company, phone, email
    let name = values[0];

    GroupsModel.addOne(name).then(result => {
      if (result == 1) {
        
      }
    }).catch(err => {
      View.showString(`Data berhasil dimasukan!`);
    });
  }
  
  static deleteOne(values) {
    let id = values[0];
    GroupsModel.deleteById(id)
      .then(result => {
        View.showString(`Behasil menghapus group!`);
      }).catch(err => {
        View.showString(`Gagal menghapus group!`);
      });
  }

  static inviteContact(values) {
    let contactName = values[0];
    let groupName = values[1];

    GroupsModel.invite(contactName, groupName)
      .then(result => {
        View.showString(`Behasil menambahkan ke group!`);
      }).catch(err => {
        View.showString(`Gagal menambahkan ke group!`);
      })
  }

  static updateGroup(values) {
    // @ id, name, company, phone, email
    let id = values[0];
    let name = values[1];

    GroupsModel.updateById(id, name)
      .then(result => {
        if (result == 1) View.showString(`Behasil update group!`);
      }).catch(err => {
        View.showString(`Gagal update group!`);
      });
  }
}

module.exports = GroupsController;
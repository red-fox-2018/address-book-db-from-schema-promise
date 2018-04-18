
const { ContactsModel, GroupsModel } = require('./../models');
const View = require('./../views/view');

class ContactsController {
  
  static showList() {
    ContactsModel.getAll().then(rows => {
      View.showList(rows);
    }).catch(err => {
      View.showString(`Sorry, failed getting data!`);
    });
  }
  
  static showById(values) {
    let id = values[0];
    ContactsModel.findById(id) .then(result => {
      View.showOne(result);
    });
  }
  
  static add(values) {
    // @ name, company, phone, email
    let name = values[0];
    let company = values[1];
    let phone = values[2];
    let email = values[3];

    ContactsModel.addOne(name, company, phone, email).then(result => {
      View.showString(`Behasil menambahkan contact!`);
    }).catch(err => {
      View.showString(`Gagal menambahkan contact!`);
    })

  }
  
  static deleteOne(values) {
    let id = values[0];
    ContactsModel.deleteById(id)
      .then(result => {
        if (result == 1) View.showString(`Behasil menghapus contact!`);
      }).catch(err => {
        View.showString(`Gagal menghapus contact!`);
      });
  }

  static updateContact(values) {
    // @ id, name, company, phone, email
    let id = values[0];
    let name = values[1];
    let company = values[2];
    let phone = values[3];
    let email = values[4];

    ContactsModel.updateById(id, name, company, phone, email)
      .then(result => {
        if (result == 1) View.showString(`Behasil update contact!`);
      }).catch(err => {
        View.showString(`Gagal update contact!`);
      });
  }
}

module.exports = ContactsController;
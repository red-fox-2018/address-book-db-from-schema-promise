
const { ContactsModel, GroupsModel } = require('./../models');
const View = require('./../views/view');

class ContactsController {
  static showList() {
    ContactsModel.getAll((contactList) => {
      View.showList(contactList);
    });
  }
  static showById(values) {
    let id = values[0];
    ContactsModel.findById(id, (result) => {
      View.showOne(result);
    })
  }
  static add(values) {
    // @ name, company, phone, email
    let name = values[0];
    let company = values[1];
    let phone = values[2];
    let email = values[3];

    ContactsModel.addOne(name, company, phone, email, (result) => {
      if (result == 1) {
        View.showString(`Behasil menambahkan contact!`);
      } else {
        View.showString(`Gagal menambahkan contact!`);
      }
    });
  }
  static deleteOne(values) {
    let id = values[0];
    ContactsModel.deleteById(id, (result) => {
      if (result == 1) {
        View.showString(`Behasil menghapus contact!`);
      } else {
        View.showString(`Gagal menghapus contact!`);
      }
    });
  }
}

module.exports = ContactsController;
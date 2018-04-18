class View {
  constructor() {

  }

  static show(message){
    console.log(message);
  }

  static help(){
    console.log(`
                              * FORMAT *

    $ node main.js addContact [name] [company] [phone] [email]
    $ node main.js updateContact [table_name] [id_contact] [new_value]
    $ node main.js deleteContact [id_contact]
    $ node main.js showContact [id_contact]
    $ node main.js addGroup [Group_name]
    $ node main.js updateGroup [id_group] [new_value]
    $ node main.js deleteGroup [id_group]
    $ node main.js showGroup [id_group]
    $ node main.js asignContactGroup [contact_name] [group_name]
      `);
  }

}

module.exports = View;

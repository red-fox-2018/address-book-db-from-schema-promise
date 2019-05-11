/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/
/*jshint -W138*/

const Table = require('cli-table');
const chalk = require('chalk');

class View {

   static display(dis) {
      console.log(dis);
   }

   static displayShowContact(data) {
      let table = new Table({
         head: ['No', 'Id', 'Name', 'Company', 'Phone Number', 'Email', 'Group Name'],
         colWidths: [5, 5, 18, 20, 18, 25, 15]
      });

      let no = 1;
      for (let i = 0; i < data.length; i++) {
         if (data[i].groupName === null) {
            data[i].groupName = 'No Group';
         }
         table.push([`${no}`, `${data[i].contact_id}`,`${data[i].name}`, `${data[i].company}`, `${data[i].phone_number}`, `${data[i].email}`, `${data[i].groupName}`]);
         no++;
      }
      console.log(table.toString());
   }

   static displayShowSearch(data) {
      let table = new Table({
         head: ['No', 'Id', 'Name', 'Company', 'Phone Number', 'Email'],
         colWidths: [5, 5, 18, 20, 18, 25]
      });

      let no = 1;
      for (let i = 0; i < data.length; i++) {
         if (data[i].groupName === null) {
            data[i].groupName = 'No Group';
         }
         table.push([`${no}`, `${data[i].contact_id}`,`${data[i].name}`, `${data[i].company}`, `${data[i].phone_number}`, `${data[i].email}`]);
         no++;
      }
      console.log(table.toString());
   }

   static displayShowGroup(data) {
      let table = new Table({
         head: ['No', 'Id', 'Name'],
         colWidths: [5, 5, 18]
      });

      let no = 1;
      for (let i = 0; i < data.length; i++) {
         table.push([`${no}`, `${data[i].group_id}`,`${data[i].name}`]);
         no++;
      }
      console.log(table.toString());
   }
}

// View.displayShowContact();
module.exports = View;

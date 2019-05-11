/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/
/*jshint -W138*/

const GroupModel = require('../models/group');
const View = require('../views/view');

class GroupController {

   static addGroup(name) {
      GroupModel.add(name)
         .then(dis => {
            View.display(dis);
         }).catch((err) => {
            View.display(err);
         });
   }

   static updateGroup(column, input, group_id) {
      GroupModel.update(column, input, group_id)
         .then(dis => {
            View.display(dis);
         }).catch((err) => {
            View.display(err);
         });
   }

   static deleteGroup(group_id) {
      GroupModel.delete(group_id)
         .then(dis => {
            View.display(dis);
         }).catch((err) => {
            View.display(err);
         });
   }

   static showGroup() {
      GroupModel.show().then(dis => {
         View.displayShowGroup(dis);
      }).catch((err) => {
         View.display(err);
      });
   }
}

module.exports = GroupController;

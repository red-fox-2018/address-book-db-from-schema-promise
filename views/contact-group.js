class ViewCGroup {
  static showErr(err){
    console.log(err);
  }
  
  static showErrDelete(err, contact, group){
    console.log(`${Object.values(contact)} not found in Group ${Object.values(group)}`);
  }

  static showData(data){
    data.forEach(objData =>{
      console.log(Object.values(objData).join(" "));
    })
  }

  static succesAdd(groupNcontact){
    console.log(`Added ${ViewCGroup[1]} to group ${ViewCGroup[0]} successfully`);
  }

  static succesDelete(){
    console.log(`Contact deleted from Group`);
  }
}

module.exports = ViewCGroup;

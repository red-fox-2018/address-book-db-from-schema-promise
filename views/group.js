class ViewGroup {
  static showErr(err){
    console.log(err);
  }

  static showData(data){
    data.forEach(objData =>{
      console.log(Object.values(objData).join(" "));
    })
  }

  static succesAdd(groupName){
    console.log(`Added ${groupName} to group successfully`);
  }

  static succesUpdate(newName){
    console.log(`Group name updated to ${newName}`);
  }

  static succesDelete(id){
    console.log(`Group with id ${id} has been deleted`);
  }
}

module.exports = ViewGroup;

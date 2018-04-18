class ViewContact {
  static showErr(err){
    console.log(err);
  }

  static showData(data){
    data.forEach(objData =>{
      console.log(Object.values(objData).join(" "));
    })
  }

  static succesAdd(contactName){
    console.log(`Added ${contactName} to contact successfully`);
  }

  static succesUpdate(){
    console.log(`Contact updated`);
  }

  static succesDelete(){
    console.log(`Contact deleted`);
  }
}

module.exports = ViewContact;

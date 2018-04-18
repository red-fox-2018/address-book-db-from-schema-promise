const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/address_book.db') 

class ModelContact{
    constructor(obj){
        this.name = obj.name,
        this.company = obj.company,
        this.telephonNumber = obj.telephonNumber,
        this.email = obj.email
    }

    static validasiAddContact(contact){
        let statusPhone = true
        let statusEmail = true        
        let telepon = contact.telephonNumber
        let email = contact.email

        if(telepon.length > 13){
            statusPhone = false
        }

        let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        if(email.match(pattern) == null){
            statusEmail = false
        }
        // console.log('ini status telepon:',statusPhone)
        // console.log('ini status email:',statusEmail)
        return {statusPhone, statusEmail}
    }

    static addContact(contact){
        let hasilValidasi = ModelContact.validasiAddContact(contact)
        console.log(hasilValidasi)
        if(hasilValidasi.statusPhone == false || hasilValidasi.statusEmail == false){
            // console.log('data yang diinput salah')
        }
        else{
            // console.log('data sudah benar dan siap diinput')
            return new Promise((resolve,reject)=>{
                db.serialize(function(){
                    let query = `insert into contacts values 
                                    (null,"${contact.name}","${contact.company}","${contact.telephonNumber}","${contact.email}");`
                    db.run(query, (err)=>{
                        if(err){
                            reject(err)
                        }else{
                            resolve()
                        }
                    })
                })
            })
        }
        
        
    }
}

module.exports = {
    ModelContact
}
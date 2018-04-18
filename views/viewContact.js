class ViewContact{
    static displayResultAddContact(status){
        if(status == true){
            console.log('data berhasil ditabahkan ke kontak')
        }
        else {
            console.log('data gagal ditambahkan')
        }
    }
}

module.exports = {
    ViewContact
}
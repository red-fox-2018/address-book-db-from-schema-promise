const sqlite3 = require('sqlite3').verbose()

class ManageDB{

    static openDB(){

        return new sqlite3.Database('../addressBook.db')
    }

    static createTable() {

        let db = ManageDB.openDB()

        db.serialize(function(){
            //nama, perusahaan, nomor telepon dan email
            db.run(`CREATE TABLE IF NOT EXISTS 
                    Contacts(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name VARCHAR(20),
                        company VARCHAR(20),
                        phone VARCHAR(13),
                        email VARCHAR(20)
                    )`)
            
            db.run(`CREATE TABLE IF NOT EXISTS
                    Groups(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name VARCHAR(20)
                    )`)

            db.run(`CREATE TABLE IF NOT EXISTS
                    ContactGroup(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    idContact INTEGER,
                    idGroup INTEGER,
                    FOREIGN KEY (idContact) REFERENCES Contacts(id),
                    FOREIGN KEY (idGroup) REFERENCES Groups(id)    
                    )`)
        })

        db.close()
    }
}

ManageDB.createTable()
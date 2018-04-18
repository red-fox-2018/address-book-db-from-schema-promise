
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address-book.db');

function setup_table() {
  db.serialize(function() {
    
    let sqlContactCreate =
    `CREATE TABLE IF NOT EXISTS Contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(100) UNIQUE,
      company VARCHAR(100),
      phone VARCHAR(100),
      email VARCHAR(100)
    )`;

    db.run(sqlContactCreate, (err) => {
      if (err) console.log(err);
    });

    let sqlCreateGroups =
    `CREATE TABLE IF NOT EXISTS Groups (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(100) UNIQUE
    )`;

    db.run(sqlCreateGroups, (err) => {
      if (err) console.log(err);
    });

    let sqlCreateGroupContacts =
    `CREATE TABLE IF NOT EXISTS GroupContacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      contactName VARCHAR(100),
      groupName VARCHAR(100),
      FOREIGN KEY(contactName) REFERENCES Contacts(name),
      FOREIGN KEY(groupName) REFERENCES Groups(name)
    )`;

    db.run(sqlCreateGroupContacts, (err) => {
      if (err) console.log(err);
    });

    // FOREIGN KEY(contactId) REFERENCES Contacts(id),
    // FOREIGN KEY(groupId) REFERENCES Groups(id)
  })
}

function seed() {
  db.serialize(function() {
    db.run(`INSERT INTO Contacts VALUES(null, 'iswanul', 'AlphaTech', '123457', 'iswanul@gmail.com')`)
    db.run(`INSERT INTO Contacts VALUES(null, 'umam', 'AlphaTech', '123458', 'umam@gmail.com')`)
    db.run(`INSERT INTO Contacts VALUES(null, 'nabila', 'AlphaTech', '1234569', 'umam@gmail.com')`)

    db.run(`INSERT INTO Groups VALUES(null, 'Golang')`);
    db.run(`INSERT INTO Groups VALUES(null, 'JavaScript')`);
    db.run(`INSERT INTO Groups VALUES(null, 'Ruby')`);

    db.run(`INSERT INTO GroupContacts VALUES(null, 'iswanul', 'JavaScript')`);
    db.run(`INSERT INTO GroupContacts VALUES(null, 'nabila', 'Golang')`);
  })
}

setup_table()
seed();
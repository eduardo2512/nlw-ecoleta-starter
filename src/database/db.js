//import sqlite3

const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

/*db.serialize(()=>{

    //CRIANDO TABELA
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
    
    // POPULANDO TABELA
    
    const query = `
        INSERT INTO PLACES(
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        "https://images.unsplash.com/photo-1542739674-b449a8938b59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        "Colectoria",
        "Guilherme Gemballa ,Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Residuos Eletronicos, Lampadas"
    ]

    const values2 = [
        "https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "Paperside",
        "Guilherme Gemballa ,Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Papeis e Papelao"
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }


    //db.run(query, values, afterInsertData)
    //db.run(query, values2, afterInsertData)

    //consulta db

    db.all(`SELECT * FROM PLACES`, function(err, rows){
        if(err){
            return console.log(err)
        }
        console.log("Aqui estao seus registros: ")
        console.log(rows)
    })

    // Deletando um dado da tabela

    //db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
    //    if(err){
    //        return console.log(err)
    //    }
    //    console.log("Registro deletado com sucesso")
    //
    //})
    

})
*/



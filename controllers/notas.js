const database = require("../database")
class NotasController{
    async create(nota){
        const results = await database.insert('notas',nota)
        console.log(results)
        return results
    }

    async readAll(){
        const notas = await database.query("SELECT * FROM notas")

        return notas
    }
}
 
module.exports = NotasController
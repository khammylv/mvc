const database = require("../database")
class RecordatorioController{

    async create(recordatorio){
        const results = await database.insert('recordatorios',recordatorio)
        console.log(results)
        return results
    }
    //metodo para prueba en postman
    async dele(recordatorio){
        const resultsdel = await database.dele('recordatorios',recordatorio)
        console.log(recordatorio)
        return resultsdel
    }

    async del(recordatorio){
        const resultsdel = await database.dele('recordatorios',recordatorio)
        console.log(recordatorio)
        return resultsdel
    }
    async readAll(){
        const recordatorios = await database.query("SELECT * FROM recordatorios")

        return recordatorios
    }
   
    async edit(recordatorio){
        const resultsedit = await database.edit('recordatorios',recordatorio)
        return resultsedit
    }
    
    async editar(recordatorio){
        const resultseditar = await database.query("SELECT * FROM recordatorios WHERE id_recor = (?)", recordatorio)
        return resultseditar
    }


}



 
module.exports = RecordatorioController
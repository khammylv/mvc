const express = require("express")
const path = require("path")
const NotaController = require("../controllers/notas")


function views(document){
    return path.join(__dirname,"../","views",document)
}

const router = express.Router()

const notaController = new NotaController()
 

router.get('/registro',function(request,response){
    return response.sendFile(views("registro.html"))
})

router.post('/registro',async function(request,response){
    const persona = request.body
    const nota = await notaController.create(persona)
    if(nota.success){
        return response.redirect("/")
    }else{
        return response.redirect("/registro")
    }
})



router.get("/notas",(req,res)=>{
    return res.sendFile(views("notas.html"))
})

router.get("/api/notas",async (req,res)=>{
    var notas = await notasController.readAll()
    return res.json(notas)
})

module.exports = router;
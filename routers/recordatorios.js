const { Console } = require("console");
const express = require("express");
const res = require("express/lib/response");
const path = require("path");
const RecordatorioController = require("../controllers/recordatorios");
const database = require("../database")

function views(document) {
  return path.join(__dirname, "../", "views", document);
}

const router = express.Router();

const recordatorioController = new RecordatorioController();

router.get("/registro", function (request, response) {
  return response.sendFile(views("registro.html"));
});

router.post("/registro", async (request, response) => {
  const persona = request.body;
  //const recordatorio = await database.insert('recordatorios',persona)
  
  const recordatorio = await recordatorioController.create(persona);
  console.log(recordatorio);
  console.log(persona)
  if (recordatorio.success) {
    console.log(recordatorio) 
    return response.redirect("/recordatorio");
  } else {
    console.log(recordatorio)  
    return response.redirect("/registro");
  }
});

router.post("/edito/:id_recor", async  (request, response)=> {
  const {id_recor}= request.params;
  const cosa = request.body
  const recordatorio = await database.query("UPDATE recordatorios SET ? WHERE id_recor=?",[cosa,id_recor])
  //const recordatorio = await recordatorioController.edit(cosa,id_recor);
  response.redirect("/recordatorio")
  console.log(cosa)
  console.log(id_recor)
  console.log(recordatorio)
  if (recordatorio.success) {
    //console.log(recordatorio)
   return response.redirect("/recordatorio");
  } else {
    //console.log(recordatorio)
    //return response.redirect("/editar");
  }
});


router.get("/editar/:id_recor", async  (request, response)=> {
  const persona = request.params.id_recor;
  const recordatorio = await recordatorioController.editar(persona);
  response.json(recordatorio);
   if (recordatorio.success) {
   // console.log(recordatorio)
   return res.render('editar',{
     data : recordatorio[0]
   })
  //return response.redirect("/editar")
  } else {
   
  // return response.redirect("/editar")
  }
});



//metodo para prueba en postman
router.post("/dele", async (request, response)=>{
  const persona = request.body.id_recor;
  const recordatorio= await recordatorioController.dele(persona);
  if (recordatorio.success) {
   
    //console.log(nota)

    return response.redirect("/")
  } else {
   
    //console.log(nota)
     return response.redirect("/recordatorio")
  }
});

router.get("/del/:id_recor", async (request, response)=>{
  const persona = request.params.id_recor;
  const recordatorio = await recordatorioController.del(persona);
  if (recordatorio.success) {
    //return response.redirect("/")
  } else {
   // console.log("eliminado");
    //console.log(nota)
     return response.redirect("/recordatorio")
  }
});

router.get("/recordatorio", (req, res) => {
  return res.sendFile(views("recordatorios.html"));
});

router.get("/api/recordatorios", async (req, res) => {
  var recordatorios = await recordatorioController.readAll();
  return res.json(recordatorios);
});


router.get("/editar", (req, res) => {
  return res.sendFile(views("editar2.html"));
});

router.get("/api/editar/:id_recor", async (req, res) => {
  const persona = request.params.id_recor;
  var recordatorios  = await recordatorioController.editar(persona);
  return res.json(recordatorios);
});



module.exports = router;

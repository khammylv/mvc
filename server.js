const express = require('express');
const path = require("path")

const notasRoutes = require("./routes/notas")


function views(document){
    return path.join(__dirname,"views",document)
}

const database = require('./database');


const app = express();


//configuracion

app.set('port', 4000)


//middleware

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(notasRoutes)


app.get('/',function(peticion,respuesta){
    return respuesta.sendFile(views("index.html"))
})



app.listen(app.get('port'), ()=>{
    console.log("Funcionando... http://localhost:4000")
})

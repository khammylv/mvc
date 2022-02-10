const express = require('express');
const app = express();


//configuracion

app.set('port', 4000)


//middleware

app.use(express.text());
app.use(express.json());


app.listen(app.get('port'), ()=>{
    console.log("Funcionando... http://localhost:4000")
})
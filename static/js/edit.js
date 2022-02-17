let notaData = [];
fetch("/api/recordatorios")
  .then(function (respuesta) {
    return respuesta.json();
  })

  .then((data) => {
    renderNot();
    notaData = data;
    editar();
  });

function editar(id_recor) {
  //document.getElementById("oculto").style.display = "none";
  let nuevo = [];
  let nuevoN = "";
  var prueba = document.getElementById("prueba");
  for (let i = 0; i < notaData.length; i++) {
    if (notaData[i].id_recor == id_recor) {
      nuevo.push(notaData[i]);
      console.log(id_recor);
      console.log(nuevo);

      for (let recor of nuevo) {
        console.log(recor);
        prueba.innerHTML = " ";
        console.log(recor.con_recor);

        prueba.innerHTML =
          prueba.innerHTML +
         `<div class="espacio">
            <div class="editE"> <h1>Edita tú nota</h1></div>
           <div class="formulario">
             <form id="formulario" method="POST" action="/edito/${recor.id_recor}" clas="row" >
                  
                  <p>Escribe tu nota</p>
                  <input type="text" name="con_recor" placeholder="Escribe tu nota" class = "note" value = "${recor.con_recor}">
                  <p>Fecha de inicio</p>
                  <input type="date" name="f_inicio">
                  <p>Fecha de fin</p>
                  <input type="date" name="f_fin" >
                  <p>Tipo de tarea</p>
                  <p>
                     <label>
                        <input type="radio" name="tipo_tarea" value="tarea" id="Formato_0" required>
                         Tarea
                     </label>
                     <label>
                        <input type="radio" name="tipo_tarea" value="nota" id="Formato_1">
                         Nota</label>
                     <label>
                      <input type="radio" name="tipo_tarea" value="recordatorio" id="Formato_1">
                      Recordatorio</label>
                  </p>
                  <p>Escribe tu nombre</p>
                  <input type="text" name="nom_usuario" placeholder="Escribe tu nombre" value = "${recor.nom_usuario}">
                  <button>Editar</button>
                
                </form>
            </div>
        </div>`;
      }
    }
  }
}

function renderNot(){
  


  const fechaActual = new Date();
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1;
  var recordatorios = document.getElementById("recordatorios");

  //console.log(nota);
  for (let recordatorio of notaData) {

    console.log(recordatorio);
    var objFecha = new Date(recordatorio.f_inicio);
    let di = objFecha.getDate();
    let mi = objFecha.getMonth() + 1;
    let ai = objFecha.getFullYear();
    var fecha = new Date(recordatorio.f_fin);
    let df = fecha.getDate();
    let mf = fecha.getMonth() + 1;
    let af = fecha.getFullYear();
    let tipo = recordatorio.tipo_tarea;

    if (di == dia && mi == mes) {
      recordatorios.innerHTML =
        recordatorios.innerHTML +
        `<div class="inicio">
                        <p>Hoy inicia la tarea</p>
                        <p class="name">${recordatorio.con_recor}</p>
                        <p>${di + "/" + mi + "/" + ai}</p>
                        <p>${df + "/" + mf + "/" + af}</p>
                        <p>${tipo}</p>
                        <p>${recordatorio.nom_usuario}</p>
                        
                        <button onclick = "editar(${
                          recordatorio.id_recor
                        })"> Editar</button>
                    </div>`;
    } else {
      if (df < dia && mf < mes) {
        recordatorios.innerHTML =
          recordatorios.innerHTML +
          `<div class="final">
                        <p> TAREA FINALIZADA</p>
                        <p class="name">${recordatorio.con_recor}</p>
                        <p>${di + "/" + mi + "/" + ai}</p>
                        <p>${df + "/" + mf + "/" + af}</p>
                        <p>${tipo}</p>
                        <p>${recordatorio.nom_usuario}</p>
                        
                        <button onclick = "editar(${
                          recordatorio.id_recor
                        })"> Editar</button>
                    </div>`;
      } else {
        if (tipo == "recordatorio") {
          recordatorios.innerHTML =
            recordatorios.innerHTML +
            `<div class="recordatorio">
                            <p class="name">${recordatorio.con_recor}</p>
                            <p>${di + "/" + mi + "/" + ai}</p>
                            <p>${df + "/" + mf + "/" + af}</p>
                            <p>${tipo}</p>
                            <p>${recordatorio.nom_usuario}</p>
                            
                            <button onclick = "editar(${
                              recordatorio.id_recor
                            })"> Editar</button>
                        </div>`;
        }
        if (tipo == "nota") {
          recordatorios.innerHTML =
            recordatorios.innerHTML +
            `<div class="nota">
                            <p class="name">${recordatorio.con_recor}</p>
                            <p>${di + "/" + mi + "/" + ai}</p>
                            <p>${df + "/" + mf + "/" + af}</p>
                            <p>${tipo}</p>
                            <p>${recordatorio.nom_usuario}</p>
                            
                            <button onclick = "editar(${
                              recordatorio.id_recor
                            })"> Editar</button>
                        </div>`;
        }
        if (tipo == "tarea") {
          recordatorios.innerHTML =
            recordatorios.innerHTML +
            `<div class="tarea">
                            <p class="name">${recordatorio.con_recor}</p>
                            <p>${di + "/" + mi + "/" + ai}</p>
                            <p>${df + "/" + mf + "/" + af}</p>
                            <p>${tipo}</p>
                            <p>${recordatorio.nom_usuario}</p>
                            
                            <button onclick = "editar(${
                              recordatorio.id_recor
                            })"> Editar</button>
                        </div>`;
        }
      }
    }
  }
  
}

function contenido(){
  document.getElementById("boton").style.display = "none";
  renderNot()
}
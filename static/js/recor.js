fetch("/api/recordatorios")
  .then(function (respuesta) {
    return respuesta.json();
  })

  .then(function (data) {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    var recordatorios = document.getElementById("recordatorios");
    console.log(data);

    //console.log(nota);
    for (let recordatorio of data) {
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
                <a href="/del/${recordatorio.id_recor}"> Delete</a>
                
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
                <a href="/del/${recordatorio.id_recor}"> Delete</a>
                
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
                    <a href="/del/${recordatorio.id_recor}"> Delete</a>
                    
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
                    <a href="/del/${recordatorio.id_recor}"> Delete</a>
                   
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
                    <a href="/del/${recordatorio.id_recor}"> Delete</a>
                    
                </div>`;
          }
        }
      }
    }


  });

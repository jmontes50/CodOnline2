var btndatos = document.getElementById("boton");

function mostrarNombres(arregloPersonas){
  for(var i = 0; i<arregloPersonas.length; i++){
    var nombre = arregloPersonas[i].first_name
    console.log(nombre)
  }
}

btndatos.addEventListener("click", function(){
  //vamos a configurar nuestro asistente que va a enviar la petición y va a esperar su respuesta
  var asistente = new XMLHttpRequest();
  //este asistente va a tener sus propios eventos
  asistente.addEventListener("readystatechange", function(){
    //readyState, me va a indicar cuál es estado de mi petición, va del 1 al 4
    switch(asistente.readyState){
      case 1:
        console.log("OPEN", asistente.readyState)//conf
        break;
      case 2:
        console.log("SEND", asistente.readyState)//enviando
        break;
      case 3:
        console.log("DATA, esperando", asistente.readyState);
        break;
      case 4:
        console.log("YA RECIBI LA RPTA", asistente.readyState) //El que me interesa
        //.responseText es una propiedad donde se guarda mi respuesta de la petición.
        var objRespuesta = JSON.parse(asistente.responseText)
        console.table(objRespuesta.data)

        mostrarNombres(objRespuesta.data);

        break;
    }
  })
  //aca finaliza el readystatechange
  //open hace la configuración del envio, a donde y como
  asistente.open("GET", "https://reqres.in/api/users?page=2")
  //send, cuando ya enviamos la petición a la API
  asistente.send(null);
})
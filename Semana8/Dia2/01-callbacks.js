let db_alumnos = ["Ricardo","Sandra","Juan","David","Paul"]

//esta función va a recibir 2 cosas, 
//1. el nombre a buscar
//2. una función ... un callback
let buscarAlumno = (nombre, funcioncallback) => {
  //vamos a poner la forma de buscar a mi alumno
  //para simular que esa busqueda va a demorar utilizaremos un setTimeout
  setTimeout(()=>{
    for(let i = 0; i < db_alumnos.length; i++){
      //el nombre que estoy revisando es el que he recibido?
      if(nombre === db_alumnos[i]){
        //encontrado
        funcioncallback(i)
        return //cuando yo ejecuto un return, se corta la ejecución de mi función buscarAlumno
      }
    }
    //Si es que for termina y nunca encontramos nada igual hay que dar una respuesta
    //y dare un -1 en la función callback para indicar que no encontre nada
    funcioncallback(-1)
  }, 3000)
}
//la idea de utilizar un callback es darle una tarea a ejecutar después que termine de realizar una tarea que demore

let funcionAPasar = (posicion) => {
  if(posicion != -1){
    console.log(`el alumno existe! y esta en la posición ${posicion}`)
  }else{
    console.log("No existe")
  }
}

buscarAlumno("Dabid", funcionAPasar)

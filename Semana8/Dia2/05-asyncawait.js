//ASYNC: traerDatos va a ser mi funcion asincrona
//para convertirla a sincrona, le agrego async antes del () =>
let traerDatos = async () => {
  //el return va equivale a un resolve
  // return "mi respuesta asincrona!"
  //El throw va equivale a un reject
  // throw "Erroooooooooor!"

  if(true){
    return "Tudo bem"
  }else{
    throw "Ñe, algo fue mal"
  }
}

// traerDatos()
// .then(respuesta => { //return
//   console.log(respuesta) 
// })
// .catch(error => { //throw
//   console.log(error) 
// })

//AWAIT: Con await yo consumo/utilizo promesas sin necesidad de then y catch
//que necesito?, necesito una función y dentro de esta llamar a mi función async
//a la función que consume, tbn le tengo que poner async antes
let usarDatos = async () => {
  try{ //intenta esto, y si ... try = then
    let miRespuesta = await traerDatos() //aca esperá
    console.log(miRespuesta) // y recien cuando se resuelve la promesa
  }catch(error){ //..no funciona, haz esto ... catch = catch
    console.log(error)
  }
}

usarDatos()
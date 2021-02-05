//la idea es simular 2 tareas asincronas
//1. encontrar un cliente
//2. buscar los pedidos, esto ya poara MOCKAPI

let obtenerCliente = () => {
  return new Promise((resolve, reject)=>{
    //mi tarea asincrona
    setTimeout(()=>{
      resolve("Se encontro al cliente")
      // reject("No se encontro el cliente")
    }, 4000)
  })
}
let obtenerPedidos = () => {
  return new Promise((resolve, reject) => {
    let asistente = new XMLHttpRequest();

    asistente.addEventListener("readystatechange", ()=>{
      //pregunto si ya tengo mi respuesta
      if(asistente.readyState === 4){
        //preguntado el codigo de respuesta de mi peticion, 200 es que fue bien
        if(asistente.status === 200){
          resolve(JSON.parse(asistente.responseText))
        }else{
          reject("No hay!!!!!")
        }
      }
    })
    asistente.open("GET","https://600f6a6c6c21e1001704eaf0.mockapi.io/pedidos");
    asistente.send(null)
  })
}

//aca ya vamos a consumir las promesas
obtenerCliente()
.then((rpta) => {
  console.log(rpta)
  //dentro de este then, retorno la función obtener Pedidos
  return obtenerPedidos(); //esto me retorna otra promesa
})
.then((rptaPedidos) => {
  console.log(rptaPedidos)
})//el catch, capturará el error de cualquiera de las promesas que esten antes
.catch((error) => {
  console.log(error)
})
//Haciendo una petición GET con fetch
fetch("https://600f6a6c6c21e1001704eaf0.mockapi.io/pedidos")
.then(respuesta => {
  // console.log(respuesta)
  if(respuesta.status === 200){
    return respuesta.json()
  }else{
    console.log("algo salio mal")
    return
  }
})
.then((datos) => {
  console.log(datos)
})
.catch((error) => {
  alert("no se encontro datos")
})

//Haciendo una petición de tipo POST

//1. voy a tener que crear un objeto con la estructura que me pide la API
let objPedido = {
  nombre_pedido: "Visión",
  dni_pedido: 43212439,
  platillos_pedido:["Estofado con Chicha","Chicha de Jora"],
  //recordemos que mockapi en las fechas, me lo guarda en segundos
  //y para eso creo una nueva fecha, getTime lo obtiene en milisegundos
  //y lo divido entre 1000 para convertirlo en segundos
  fecha_pedido:new Date().getTime() / 1000,
  total_pedido:40.00
}
//2. En el caso de fetch, cuando yo hago un POST/PUT, tengo que mandar los headers, para indicar que tipo de info estoy enviando
let cabecera = {
  //tipo de metodo HTTP
  method:"POST",
  headers:{
    'Content-type':"application/json"
  }, //headers, que contenido y más información de mi petición
  body: JSON.stringify(objPedido) //contenido y lo tengo que convertir a texto
}
//3. Ya teniendo los datos a mandar y las cabeceras con la info, nos toca hacer la petición
//3.1 cuando hago un POST/PUT, tengo que pásarle como 2do parámetro la cabecera a fetch
fetch("https://600f6a6c6c21e1001704eaf0.mockapi.io/pedidos", cabecera)
.then((respuesta) => {
  return respuesta.json() //obtengo la respuesta,aqui esta el status
})
.then(datos => {
  console.log(datos) //con json() ya me da los datos de la petición
})
.catch(error => {
  console.log(error) //por si hay algún error
})



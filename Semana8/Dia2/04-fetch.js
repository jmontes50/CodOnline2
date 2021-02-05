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
//Objetivo: Encargarse de interactuar en lo posible con el DOM (Html)

class Interface {
  imprimirProductos(arregloProductos){ //si esta clase va a poner algo en el DOM, tendrá que sacarlo de algun lado
    const contenido = document.getElementById("contenido")
    //estadoContenido va a guardar el contenido
    let estadoContenido = arregloProductos.map((producto)=>{
      return producto
    })
    
    console.log(estadoContenido)
  }
}
//Objetivo: Hacer las peticiones GET, POST, PUT, DELETE

const URL = 'https://601e0117be5f340017a1a114.mockapi.io/'

class Network {
  obtenerProductos(){ //GET
    return new Promise((resolve, reject)=>{
      fetch(`${URL}productos`)
      .then(respuesta => {
        return respuesta.json() //obtengo el JSON con los datos de la petición
      })
      .then(misProductos => {
        resolve(misProductos)
      })
      .catch(error => reject(error))
    })
  }

  crearProducto(objProducto){ // POST, como va a crear, necesito recibir que va a crear
    return new Promise((resolve, reject) => {
      let configuracion = {
        method:"POST",
        body:JSON.stringify(objProducto), //lo tengo que convertir antes a JSON (texto)
        headers:{"Content-type":"application/json"}
      }
      fetch(`${URL}productos`, configuracion)
      .then(respuesta => {
        return respuesta.json()
      })
      .then(productoCreado => {
        resolve(productoCreado)
      })
      .catch(error => reject(error))
    })
  }
}


//La idea de crear un servicio es que me devuelva lo que le pido y asi separar la lógica de mis componentes
import axios from "axios"

// const URL = "https://601e0117be5f340017a1a114.mockapi.io/productos"
const URL =  "https://backfloresv1.herokuapp.com/api/v1/productos"

const obtenerProductos = async () => {
  try {
    // let peticion= await axios.get(URL)
    // return peticion.data
    let {data} = await axios.get(URL)
    return data.content //json
  } catch (error) {
    return error
  }
}

const obtenerProductoPorId = async (prod_id) => {
  try {
    let {data} = await axios.get(`${URL}/${prod_id}`)
    return data.content
  } catch (error) {
    return error
  }
}

const crearProducto = async (objProducto) => {
  try {
    let headers = {
      "Content-Type":"application/json"
    }//axios.post(URL, datos_a_enviar_json, {headers})
    let {data} = await axios.post(URL, objProducto, {headers})
    return data.content
  } catch (error) {
    return error
  }
}

const editarProducto = async (objProducto, id) => {
  try {
    let headers = {
      "Content-Type":"application/json"
    }
    let {data} = await axios.put(`${URL}/${id}`, objProducto, {headers})
    console.log({data})
    return data.content
  } catch (error) {
    return error
  }
}

const subirArchivo = (imagen, refStorage) => {
  return new Promise((resolve, reject) => {
    const tarea = refStorage.put(imagen)

    tarea.on(
      'state_changed',
      () => {},//aqui iría una función que observa la subida de mi archivo
      (error) => {reject(error)}, //aqui manejamos si es que recibimos un error, por eso hace un reject
      () => { //aqui ya podemos inspeccionar cuando el archivo ha terminado de subirse a firebase
        tarea.snapshot.ref.getDownloadURL()
        .then(urlImagen => resolve(urlImagen))
      }
    )
  })
}

//export mis funciones en forma de un objeto
export {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  editarProducto,
  subirArchivo
}
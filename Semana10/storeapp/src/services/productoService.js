//La idea de crear un servicio es que me devuelva lo que le pido y asi separar la lógica de mis componentes
import axios from "axios"

const URL = "https://601e0117be5f340017a1a114.mockapi.io/productos"

const obtenerProductos = async () => {
  try {
    // let peticion= await axios.get(URL)
    // return peticion.data
    let {data} = await axios.get(URL)
    return data //json
  } catch (error) {
    return error
  }
}

//export mis funciones en forma de un objeto
export {
  obtenerProductos
}
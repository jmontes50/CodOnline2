import React,{useState, useEffect} from 'react'
import {crearProducto, subirArchivo} from "../services/productoService"
import Swal from 'sweetalert2'
//useHistory me permite redireccionar hacia una ruta directamente desde el codigo de react
import {useHistory} from 'react-router-dom'
import Fire from "../config/Firebase"

//esta variable me va a permitir para manejar mi archivo
let imagenArchivo

export default function FormProducto() {
  //ESTE ESTADO va a controlar a todos los input, pero para hacerlo
  const [value, setValue] = useState({
    nombre:"",
    descripcion:"",
    precio:0,
    stock:0,
  })
  //instanciando useHistory
  let history = useHistory()

  //esta función se encargará de controlar los input, para esto recibirá el evento
  const actualizarInput = (e) => {
    setValue({
      ...value,
      //obtengo el name y le digo que su valor sea el valor
      [e.target.name]: e.target.value
    })
  }

  const manejarSubmit = async (e) => {
    e.preventDefault()
    //subida de imagen
    const refProductosStorage = Fire.storage().ref(`productos/${imagenArchivo.name}`) //crea mos la referencia
    let urlImagenSubida = await subirArchivo(imagenArchivo, refProductosStorage) //aqui ya subo el archivo

    //esta parte crea mi producto
    let response = await crearProducto({...value, imagen:urlImagenSubida})
    // console.log(response)
    // alert("Producto Creado!!")
    Swal.fire({
      icon: "success",
      title: "Producto Creado!!!",
      showConfirmButton:false,
      timer:2000
      //esta promesa se ejecuta despues que la alerta desaperece o el usuario interactua con ella
    }).then(() => {
      //.push(URL) es el método que me redirecciona hacia otra ruta
      history.push('/dashboard')
    })
  }

  //obtengo la imagen del input file
  const manejarImagen = (e) => {
    let miImagen = e.target.files[0]
    imagenArchivo = miImagen
  }

  return (
    <div>
      <form onSubmit={(e) => {manejarSubmit(e)}}>
        <div className="mb-2">
          <label className="form-label">
            Nombre Producto
          </label>
          <input 
            type="text" 
            placeholder="Ej. Chocolates"
            name="nombre"
            className="form-control"
            value={value.nombre}
            onChange={(e) => {actualizarInput(e)}}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">
            Descripción
          </label>
          <input 
            type="text" 
            placeholder="Ej. Chocolates bañados en crema"
            name="descripcion"
            className="form-control"
            value={value.descripcion}
            onChange={(e) => {actualizarInput(e)}}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">
            Precio
          </label>
          <input 
            type="number" 
            placeholder="20"
            name="precio"
            className="form-control"
            value={value.precio}
            onChange={(e) => {actualizarInput(e)}}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">
            Stock
          </label>
          <input 
            type="number" 
            placeholder="15"
            name="stock"
            className="form-control"
            value={value.stock}
            onChange={(e) => {actualizarInput(e)}}
          />
        </div>

        <div className="mb-2">
          <label className="form-label">
            Imagen
          </label>
          <input
            type="file"
            className="form-control"
            onChange={(e)=>{manejarImagen(e)}}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Crear Producto
        </button>
      </form>
    </div>
  )
}

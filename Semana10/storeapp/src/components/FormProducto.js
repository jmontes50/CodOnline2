import React,{useState, useEffect} from 'react'
import {crearProducto} from "../services/productoService"
import Swal from 'sweetalert2'
//useHistory me permite redireccionar hacia una ruta directamente desde el codigo de react
import {useHistory} from 'react-router-dom'

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
    let response = await crearProducto({...value})
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
        <button className="btn btn-primary" type="submit">
          Crear Producto
        </button>
      </form>
    </div>
  )
}

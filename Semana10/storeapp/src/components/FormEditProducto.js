import React, {useState, useEffect} from 'react'
import {editarProducto, obtenerProductoPorId} from "../services/productoService"
import Swal from 'sweetalert2'
import {useHistory} from 'react-router-dom'

export default function FormEditProducto({id}) {
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

  const getProductById = async () => {
    let response = await obtenerProductoPorId(id)
    let {nombre, descripcion, precio, stock} = response
    //en objetos, si la propiedad y valor es lo mismo se puede reducir a una sola expresion
    setValue({
      nombre,
      descripcion,
      precio,
      stock
    })
  }

  useEffect(() => {
    getProductById()
  },[])

  const manejarSubmit = async (e) => {
    e.preventDefault()
    let response = await editarProducto({...value}, id)
    // console.log(response)
    // alert("Producto Creado!!")
    Swal.fire({
      icon: "success",
      title: "Producto Editado!!!",
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
          Editar Producto
        </button>
      </form>
    </div>
  )
}

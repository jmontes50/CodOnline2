import React,{useState, useEffect} from 'react'
import {crearProducto} from "../services/productoService"

export default function FormProducto() {
  //ESTE ESTADO va a controlar a todos los input, pero para hacerlo
  const [value, setValue] = useState({
    nombre:"",
    descripcion:"",
    precio:0,
    stock:0,
  })
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
    console.log(response)
    alert("Producto Creado!!")
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

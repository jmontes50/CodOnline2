import React,{useState} from 'react'
import {crearCategoria} from "../services/categoriaService"

export default function FormCategoria() {
  const [nombreCategoria, setNombreCategoria] = useState("")
  //esta función va a recibir el evento
  const manejarSubmit = async (ev) => {
    //prevenimos que se ejecute el evento predeterminado del submit
    ev.preventDefault()
    //creamnos el objeto tal como le pide el backend
    let objCategoria = {
      nombre:nombreCategoria
    }
    //hago la petición
    let response = await crearCategoria(objCategoria)
    console.log(response)
  }

  return (
    <div>
      <form onSubmit={(ev) => manejarSubmit(ev)}>
        <div className="mb-2">
          <label className="form-label">
            Nombre de la Categoria
            </label>
          <input 
            className="form-control" 
            type="text"
            value={nombreCategoria}
            onChange={(e) => {setNombreCategoria(e.target.value)}}
          />
          <small className="form-text">
            Ej.: Ofertas ó Regalos
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
        Crear Categoria
        </button>
      </form>
    </div>
  )
}

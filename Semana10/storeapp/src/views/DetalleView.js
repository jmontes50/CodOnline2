import React, {useState, useEffect, Fragment} from 'react'
import {obtenerProductoPorId} from "../services/productoService"

export default function DetalleView(props) {
  // console.log(props.match.params.id)
  const productoId = props.match.params.id //este es el ud de la URL

  const [miProducto, setMiProducto] = useState({})

  const getProduct = async () => {
    let productoObtenido = await obtenerProductoPorId(productoId)
    setMiProducto(productoObtenido)
  }

  useEffect(() => {
    getProduct()
  },[])

  return (
    <div className="mt-3">
      <div className="row">
        <div className="col-md-12 col-xl-6">
          <img 
            src={miProducto.imagen}
            alt={miProducto.nombre}
            className="img-fluid"
          />
        </div>
        <div className="col-md-12 col-xl-6">
          <h1 className="display-6">{miProducto.nombre}</h1>
          <p className="lead">{miProducto.descripcion}</p>
          <p className="font-weight-bold">Precio: S/ {miProducto.precio}</p>
        </div>
      </div>
    </div>
  )
}

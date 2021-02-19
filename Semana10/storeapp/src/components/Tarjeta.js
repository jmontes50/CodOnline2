import React from 'react'
import {Link} from "react-router-dom"

export default function Tarjeta({producto}) {
  return (
    <div className="col-sm-12 col-lg-6 col-xl-3">
      <div className="card mb-2">
        <img src={producto.imagen} alt="..." />
        <div className="card-body d-grid justify-content-center">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="font-weight-bold">
            Precio: S/ {producto.precio}
          </p>
          <Link 
          className="btn btn-primary btn-sm" 
          to={`/detalle/${producto._id}`}
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  )
}

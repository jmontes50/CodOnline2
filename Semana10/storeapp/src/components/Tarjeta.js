import React from 'react'

export default function Tarjeta({producto}) {
  return (
    <div className="col-sm-12 col-lg-6 col-xl-3">
      <div className="card">
        <img src={producto.imagen} alt="..." />
        <div className="card-body d-grid justify-content-center">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="font-weight-bold">
            Precio: S/ {producto.precio}
          </p>
        </div>
      </div>
    </div>
  )
}

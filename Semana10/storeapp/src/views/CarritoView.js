import React,{useContext} from 'react'
import {CarritoContext} from '../context/carritoContext'

export default function CarritoView() {
  //Rrecuerden, useContext obtiene lo que provea el provider pero necesita saber que contexto Utilizar
  const {carrito, anadirProducto} = useContext(CarritoContext)

  return (
    <div>
      <h1>Carrito</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item, i) => (
            <tr key={i}>
              <td>{item.nombre}</td>
              <td>{item.precio}</td>
              <td>{item.cantidad}</td>
              <td>{item.precio * item.cantidad}</td>
              <td>
                <button className="btn btn-danger btn-sm">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>


      </table>
    </div>
  )
}

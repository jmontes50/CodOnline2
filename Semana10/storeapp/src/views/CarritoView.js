import React,{useContext} from 'react'
import {CarritoContext} from '../context/carritoContext'

export default function CarritoView() {

  const {carrito, anadirProducto} = useContext(CarritoContext)

  return (
    <div>
      <h1>Carrito</h1>
    </div>
  )
}

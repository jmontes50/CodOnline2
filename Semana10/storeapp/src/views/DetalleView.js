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
    <Fragment>
      <h1>{miProducto.nombre}</h1>
    </Fragment>
  )
}

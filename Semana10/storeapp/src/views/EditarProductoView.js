import React from 'react'
import FormEditProducto from "../components/FormEditProducto"
import {useParams} from 'react-router-dom'

export default function EditarProductoView() {
  let {id} = useParams()

  return (
    <div>
      <h1 className="display-4">Editar Producto</h1>
      <FormEditProducto id={id}/>
    </div>
  )
}

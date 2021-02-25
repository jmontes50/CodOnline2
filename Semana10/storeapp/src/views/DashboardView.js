import React, {useState, useEffect} from 'react'
import {obtenerProductos} from '../services/productoService'
import { DataGrid } from '@material-ui/data-grid'

export default function DashboardView() {
  const [productos, setProductos] = useState([])

  const getProducts = async () => {
    let response = await obtenerProductos()
    let productosConId = response.map((prod) => {
      return {...prod, id:prod._id}
    })
    setProductos(productosConId)
  }

  useEffect(() => {
    getProducts()
  }, [])

  //aqui va los columns de DataGrid
  let columns = [
    { field: 'nombre', headerName: 'Nombre', width: 130},
    { field: 'descripcion', headerName: 'Descripción', width: 400 },
    { field: 'precio', headerName: 'Precio', width: 200 },
  ]

  return (
    <div className="mt-3">
      <h1 className="display-4">
        Dashboard
      </h1>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xl-4">
          <div className="d-grid">
            <button className="btn btn-primary btn-lg">
              Crear Producto
            </button>
          </div>
        </div>
        {/* aqui va el datagrid */}
        <div style={{width:'100%', height:'600px'}}>
          <DataGrid rows={productos} columns={columns} pageSize={8} />
        </div>
      </div>
    </div>
  )
}

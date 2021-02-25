import React, {useState, useEffect} from 'react'
import {obtenerProductos} from '../services/productoService'

export default function DashboardView() {
  const [productos, setProductos] = useState([])

  const getProducts = async () => {
    let response = await obtenerProductos()
    setProductos(response)
  }

  useEffect(() => {
    getProducts()
  }, [])

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
        <div className="col-12">
          {/* Mostrando Productos */}
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((prod, i) => (
                <tr key={i}>
                  <td>{prod.nombre}</td>
                  <td>{prod.descripcion}</td>
                  <td>{prod.precio}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

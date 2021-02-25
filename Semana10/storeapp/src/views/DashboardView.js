import React from 'react'

export default function DashboardView() {
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
      </div>
    </div>
  )
}

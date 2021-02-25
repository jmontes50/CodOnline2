import React, {Fragment} from 'react'
import {Route} from "react-router-dom"
// importando componente Vistas
import HomeView from './views/HomeView'
import DetalleView from './views/DetalleView'
import CrearCategoriaView from './views/CrearCategoriaView'
import CrearProductoView from './views/CrearProductoView'
import DashboardView from './views/DashboardView'

export default function routes() {
  return (
    <Fragment>
      {/* definir las rutas */}
      <Route path="/" exact component={HomeView} />
      <Route path="/detalle/:id" exact component={DetalleView} />
      <Route path="/crearcategoria" exact component={CrearCategoriaView} />
      <Route path="/crearproducto" exact component={CrearProductoView} />
      <Route path="/dashboard" exact component={DashboardView} />
    </Fragment>
  )
}

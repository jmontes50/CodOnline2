import React, {Fragment} from 'react'
import {Route} from "react-router-dom"
// importando componente Vistas
import HomeView from './views/HomeView'
import DetalleView from './views/DetalleView'

export default function routes() {
  return (
    <Fragment>
      {/* definir las rutas */}
      <Route path="/" exact component={HomeView} />
      <Route path="/detalle" exact component={DetalleView} />
    </Fragment>
  )
}

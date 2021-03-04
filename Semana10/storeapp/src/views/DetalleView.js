import React, { useState, useEffect, Fragment } from "react";
import { obtenerProductoPorId } from "../services/productoService";
import Cargando from "../components/Cargando";

export default function DetalleView(props) {
  // console.log(props.match.params.id)
  const productoId = props.match.params.id; //este es el ud de la URL

  const [miProducto, setMiProducto] = useState({})
  const [estaCargando, setEstaCargando] = useState(true)
  const [cantidad, setCantidad] = useState(1)

  const getProduct = async () => {
    let productoObtenido = await obtenerProductoPorId(productoId);
    setMiProducto(productoObtenido)
    setEstaCargando(false)
  };

  const reducirCantidad = () => {
    if(cantidad === 1){ //reviso que cantidad no sea menor a 1
      return
    }
    setCantidad(cantidad - 1)//siempre y cuando cantidad no sea 1
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Fragment>
      {estaCargando ? (
        // si estaCargando es true
        <Cargando />
      ) : (
        //si estaCargando es false
        <div className="mt-3">
          <div className="row">
            <div className="col-md-12 col-xl-6">
              <img
                src={miProducto.imagen}
                alt={miProducto.nombre}
                className="img-fluid"
              />
            </div>
            <div className="col-md-12 col-xl-6">
              <h1 className="display-6">{miProducto.nombre}</h1>
              <p className="lead">{miProducto.descripcion}</p>
              <p>Precio: S/ {miProducto.precio}</p>
              <p className="fw-bold">Comprar</p>
              <div>

                <button className="btn btn-outline-dark btn-sm" onClick={() => {setCantidad(cantidad + 1)}}>
                  <i className="fas fa-plus"></i>
                </button>

                <span className="font-weight-bold mx-2">Cantidad: {cantidad}</span>

                <button className="btn btn-outline-dark btn-sm" onClick={() => {reducirCantidad()}}>
                 <i class="fas fa-minus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

import React, { useState, useEffect, useContext, Fragment } from "react";
import { obtenerProductoPorId } from "../services/productoService";
import Cargando from "../components/Cargando";
import {CarritoContext} from "../context/carritoContext"
import Swal from "sweetalert2"
import {useHistory} from 'react-router-dom'

export default function DetalleView(props) {
  // console.log(props.match.params.id)
  const productoId = props.match.params.id; //este es el ud de la URL

  const [miProducto, setMiProducto] = useState({})
  const [estaCargando, setEstaCargando] = useState(true)
  const [cantidad, setCantidad] = useState(1)

  const {carrito, anadirProducto} = useContext(CarritoContext)//obteniendo el contexto

  let history = useHistory()//obtenemos history para redirigir al usuario despues de añadir un producto

  const getProduct = async () => {
    let productoObtenido = await obtenerProductoPorId(productoId);
    setMiProducto(productoObtenido)
    setEstaCargando(false)
  }

  const anadirProductoAContext = () => { 
    let productoAlCarrito = {...miProducto, cantidad:cantidad} //creo un nuevo obj con la cantidad y el producto
    anadirProducto(productoAlCarrito) //añado el producto al carrito
    Swal.fire({ //alerta!
      icon:'success',
      title:'Producto Añadido!',
      showConfirmButton:true,
      showDenyButton:true,
      confirmButtonText:'Seguir Comprando',
      denyButtonText:'Ir al carrito'
    }).then((resultado) => {
      if(resultado.isConfirmed){
        history.push('/')
        //lo mando al home
      }else if(resultado.isDenied){
        //lo mando a la pagina de carrito que todavia no tenemos
        history.push('/carrito')
      }
    })
  }

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
            <div className="col-12 titulo-detalle mb-3">
              <h1>{miProducto.nombre}</h1>
            </div>
            <div className="col-md-12 col-xl-6">
              <img
                src={miProducto.imagen}
                alt={miProducto.nombre}
                className="img-fluid"
              />
            </div>
            <div className="col-md-12 col-xl-6 contenido-detalle">
              {/* <h1 className="display-6">{miProducto.nombre}</h1> */}
              <p className="lead">{miProducto.descripcion}</p>
              <p>Precio: S/ {miProducto.precio}</p>
              <p className="fw-bold">Comprar</p>
              <div>
                <button 
                  className="btn btn-outline-dark btn-sm" 
                  onClick={() => {setCantidad(cantidad + 1)}}
                >
                  <i className="fas fa-plus"></i>
                </button>

                <span className="font-weight-bold mx-2">Cantidad: {cantidad}</span>

                <button 
                  className="btn btn-outline-dark btn-sm" 
                  onClick={() => {reducirCantidad()}}
                >
                 <i className="fas fa-minus"></i>
                </button>
              </div>
              <button className="btn btn-danger btn-lg mt-2" onClick={()=>{anadirProductoAContext()}}>
                Añadir al Carrito
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

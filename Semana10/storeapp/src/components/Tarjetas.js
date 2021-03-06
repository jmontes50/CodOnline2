import React, { useState, useEffect } from "react";
import Tarjeta from "./Tarjeta";
import { obtenerProductos } from "../services/productoService";

export default function Tarjetas() {
  const [productos, setProductos] = useState([]);
  const [mostrar, setMostrar] = useState(8) //para indicar desde donde voy a mostrar
  //la idea es hacer la peticion aquí y con la respuesta actualizar el estado de productos
  const getProducts = async () => {
    let data = await obtenerProductos();
    setProductos(data);
  };
  //con esto llamo a getProducts solamente en el montaje de mi componente
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="row">
      {productos.slice(mostrar, mostrar + 8).map((prod, i) => (
        <Tarjeta producto={prod} key={i} />
      ))}
      <div className="col-12 d-flex justify-content-between my-3">
        <button className="btn btn-dark" onClick={()=>{setMostrar(mostrar - 8)}}>
          Anterior
        </button>
        <button className="btn btn-dark" onClick={()=>{setMostrar(mostrar + 8)}}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

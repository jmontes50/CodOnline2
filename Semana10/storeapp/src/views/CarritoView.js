import React, { useContext } from "react";
import { CarritoContext } from "../context/carritoContext";
import { Link } from "react-router-dom";

export default function CarritoView() {
  //Rrecuerden, useContext obtiene lo que provea el provider pero necesita saber que contexto Utilizar
  const { carrito, anadirProducto, removerProducto } = useContext(
    CarritoContext
  );

  return (
    <div>
      <h1>Carrito</h1>
      {carrito.length === 0 ? (
        <p>Aún no ha agregado productos a su carrito</p>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item, i) => (
                <tr key={i}>
                  <td>{item.nombre}</td>
                  <td>{item.precio}</td>
                  <td>{item.cantidad}</td>
                  <td>{item.precio * item.cantidad}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        removerProducto(i);
                      }}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/checkout" className="btn btn-success btn-lg">
            Finalizar Compra
          </Link>
        </div>
      )}
    </div>
  );
}

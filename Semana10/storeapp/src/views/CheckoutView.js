import React, { useContext, useState } from "react";
import { CarritoContext } from "../context/carritoContext";

export default function CheckoutView() {
  const { carrito } = useContext(CarritoContext);
  let carritoTmp = [...carrito];
  let totalCarrito = carritoTmp.reduce(
    (total, prod) => total.precio * total.cantidad + prod.precio * prod.cantidad
  )

  return (
    <div>
      <h1 className="display-6">Finalizar Compra</h1>
      <div className="alert alert-success">
        Tu carrito actual tiene un valor actual de: S/ {totalCarrito}
      </div>
    </div>
  )
}

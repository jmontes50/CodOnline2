import React, { useContext, useState } from "react";
import { CarritoContext } from "../context/carritoContext";
import { useForm } from "react-hook-form"

export default function CheckoutView() {
  const { carrito } = useContext(CarritoContext);
  let carritoTmp = [...carrito];
  let totalCarrito = 0
  if(carrito.length > 1){
    totalCarrito = carritoTmp.reduce(
      (total, prod) => total.precio * total.cantidad + prod.precio * prod.cantidad
    )
  }else if(carrito.length === 1){
    totalCarrito = carrito[0].precio * carrito[0].cantidad
  }

    //trayendo las herramientas de hook forms
    //register = pàra registrar mis input
    //handleSUbmit es una funcion que maneja el onSubmit del form
    //errors, verifica las validaciones de register y según eso muestra un error
  let { register, handleSubmit, errors } = useForm()

  let escucharSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <h1 className="display-6">Finalizar Compra</h1>
      <div className="alert alert-success">
        Tu carrito actual tiene un valor actual de: S/ {totalCarrito}
      </div>
      <form onSubmit={handleSubmit(escucharSubmit)}>
        <div>
          <label className="form-label">Nombre Completo</label>
          <input type="text" name="nombre" className="form-control" ref={register({required: true})} />
          {errors.nombre && errors.nombre.type === "required" && (
            <small className="text-danger">El nombre es obligatorio</small>
          )}
        </div>
        <button type="submit" className="btn btn-success btn-lg mt-3">
          Realizar Compra
        </button>
      </form>
    </div>
  )
}

import React, { useState, createContext } from "react";

export const CarritoContext = createContext();

const CarritoContextProvider = (props) => {
  const [carrito, setCarrito] = useState([]);

  const anadirProducto = (producto) => {
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i]._id === producto._id) {
        //si detecto que el producto ya esta en el carrito
        //como detecto que el producto ya esta en el carrito, solamente aumento su cantidad
        let nuevoProducto = {
          ...carrito[i],
          cantidad: (carrito[i].cantidad += producto.cantidad),
        };
        let carritoTmp = [...carrito];
        carritoTmp.splice(i, 1); //aquí estoy removiendo un producto en la posicion i
        carritoTmp.push(nuevoProducto); //añado el nuevo producto con la cantidad actualizada
        setCarrito([...carritoTmp]); //lo actualizo con el carrito actualizado
        return; //corto la ejecución
      }
    }
    setCarrito([...carrito, producto]);
  };

  const removerProducto = (indice) => {
    let carritoTmp = [...carrito];
    carritoTmp.splice(indice, 1); //como aquí ya removi el producto a retirar
    setCarrito(carritoTmp); //actualizo el estado con el carrito removido
  }

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        anadirProducto,
        removerProducto,
      }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoContextProvider;

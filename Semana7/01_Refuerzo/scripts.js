//1. primero tengo que obtener los elementos con los que voy a trabajar, estos ya estan en el HTML
let lista = document.getElementById("divplatillos");
let compra = document.getElementById("divcarrito");

//2. Esta variable carrito me va a servir para después yo utilizarla para meter los platillos que el usuario va a comprar. NT: como limitación el usuario podrá comprar 01 unidad de c/platillo.
let carrito = [];

//3.imprimirPlatillos se encargara de a partir de los elementos en platillos convertirlos a HTML y agregarlos en divplatillos
function imprimirPLatillos() {
  //3.1 me va a servir para acumular el texto HTML de cada platillo
  let platillosHtml = "";
  //3.2 comencemos a recorrer el arreglo de los platillos
  for (let i = 0; i < platillos.length; i++) {
    //3.3 a partir de las propiedades de cada objeto(platillo), creamos un div con otras etiquetas html que contengan esas propiedades.
    platillosHtml =
      platillosHtml +
      `<div class="tarjeta">
            <h4>${platillos[i].nombre}</h4>
            <div class="imagen">
                <img src="${platillos[i].imagen}">
            </div>
            <p>
                ${platillos[i].descripcion}
            </p>
            <p>
                <span>Precio: </span>
                ${platillos[i].precio}
            </p>
            <p>
                <span>Stock: </span>
                ${platillos[i].stock}
            </p>
            <button class="boton">
                Agregar al carrito
            </button>
        </div>`;
  }
  lista.innerHTML = platillosHtml;
  //4.1.1 yo necesito llamar a mi función que obtiene los botones después de ya tenerlos en el DOm(Html)
  obtenerBotones();
}
imprimirPLatillos();

//4. vamos a crear una función que me permita obtener el evento click de cada boton agregado anteriormente.
function obtenerBotones() {
  //4.1 como los he generado dinamicamente utilizo getElementsByClassName "obtenerElementosPorSuNombreDeClase" para tener una arreglo de esos botones
  let listaBotones = document.getElementsByClassName("boton");
  //4.2 como he obtenido los botones en un arreglo los recorro 1 x 1
  for (let j = 0; j < listaBotones.length; j++) {
    //4.2.1 y cada vez que los recorro les añado un listener del evento click
    listaBotones[j].addEventListener("click", function(){
      //cada vez que yo haga click añada un platillo a mi variable carrito
      // console.log(`Click! ${j}`);
      anadirACarrito(j)
    });
  }
}

//5. Esta función se encargará de reducir el stock y añadir los productos a carrito y para esto va a recibir el indice de cada producto
function anadirACarrito(indice){
  //5.1 voy a preguntar si el stock del producto es 0, si es 0, no dejo que se añada el producto
  if(platillos[indice].stock <= 0){
    alert("OSHE no hay stock!!!")
    //5.1.1 pero si no añado el producto a carrito
  }else{
    //añado el platillo a el arreglo carrito
    carrito.push(platillos[indice])
    //disminuyo el stock del platillo que estoy agregando en 1 => a-- = a = a - 1;
    platillos[indice].stock--
    //Para poder visualizar el cambio de stock, despues que he cambiado el stock de un platillo, vuelvo a imprimir todo gracias a imprimirPplatillos
    imprimirPLatillos();
  }
  // console.table(carrito)
}

//6. Creamos una función que se encargue de imprimir el carrito en divcarrito
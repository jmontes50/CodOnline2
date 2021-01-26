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
//imprimirPLatillos no se ejecuta sola :D
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
    //NT: de la parte 6 de abajo, ejecutamos la function imprimirCarrito para que cambie el contenido del divcarrito
    imprimirCarrito();
  }
  // console.table(carrito)
}

//6. Creamos una función que se encargue de imprimir el carrito en divcarrito
let totalBoleta = 0;
function imprimirCarrito(){
  //contenido boleta seran los platillos en HTML
  let contenidoBoleta = "";
  //total Boleta sera el monto total
  // let totalBoleta = 0; //esto lo he pasado afuera para utilizarlo globalmente
  //6.1 si no hay productos en carrito dare un mensaje que diga que no hay nada todavia
  if(carrito.length <= 0){
    compra.innerHTML = "El carrito esta vacio"
  }else{
    //vamos a crear como una tabla para tenerlos productos listados
    for(let x = 0; x < carrito.length; x++){
      //agregamos por cada platillo en el carrito una fila con el nombre y precio de ese platillo
      contenidoBoleta = contenidoBoleta + 
      `<tr>
        <td>${carrito[x].nombre}</td>
        <td>${carrito[x].precio}</td>
      </tr>
      `
      //acá iremos sumando el precio de todos los platillos dentro de carrito
      totalBoleta = totalBoleta + carrito[x].precio
    }
    //Despues que he creado el conteido html de los platillos y he sumado el total
    //crear el cuerpo para la boleta, en HTML
    let boletaHtml = `
    <table class="boleta">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
      <!-- Añadimos las filas y columnas que creamos antes -->
        ${contenidoBoleta}
        <tr>
          <td>IGV</td>
          <td>${totalBoleta*0.18}</td>
        </tr>
        <tr>
          <td>TOTAL</td>
          <td>${totalBoleta}</td>
        </tr>
      </tbody>
    </table>
    `
    //añadimos el contenido de la boleta al divcarrito
    compra.innerHTML = boletaHtml;
  }
}
imprimirCarrito();

//Refuerzo 02--------------------------------------

//1. Obtenemos los elementos que acabamos de crear
let inputNombre = document.getElementById("nombre")
let inputDni = document.getElementById("dni")
let inputFecha = document.getElementById("fecha")
let btnGuardar = document.getElementById("btnguardar")

//2. yo quiero obtener los datos cuando de click al boton guardar pedido,entonces voy a llamar a un listener para escuchar el evento click
btnGuardar.addEventListener("click", function(){
  let nombre = inputNombre.value
  let dni = inputDni.value
  let fecha = inputFecha.value
  //conversion fecha a segundos, para eso utilizamos getTime
  //getTime() nos da la fecha en milisegundos asi que lo dividimos en 1000
  let fechaConvertida = new Date(fecha).getTime() / 1000

})

//1. primero tengo que obtener los elementos con los que voy a trabajar, estos ya estan en el HTML
let lista = document.getElementById("divplatillos")
let compra = document.getElementById("divcarrito")

//2. Esta variable carrito me va a servir para después yo utilizarla para meter los platillos que el usuario va a comprar. NT: como limitación el usuario podrá comprar 01 unidad de c/platillo.
let carrito = []

//3.imprimirPlatillos se encargara de a partir de los elementos en platillos convertirlos a HTML y agregarlos en divplatillos
function imprimirPLatillos(){
    //3.1 me va a servir para acumular el texto HTML de cada platillo
    let platillosHtml = "";
    //3.2 comencemos a recorrer el arreglo de los platillos
    for(let i = 0; i < platillos.length; i++){
        platillosHtml = platillosHtml + 
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
        </div>`
    }
    lista.innerHTML = platillosHtml;
}
imprimirPLatillos();
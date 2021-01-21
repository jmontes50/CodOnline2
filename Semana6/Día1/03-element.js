var miContenedor = document.querySelector(".contenedor");

miContenedor.style.color = "#ED20FF";
miContenedor.style.opacity = 0.5;

//
miContenedor.style.borderRadius = "20px";

miContenedor.classList.add("brillo");

miContenedor.classList.remove("brillo");

//setInterval ejecuta una función cada X tiempo de forma repetitiva
// window.setInterval(function(){
//   //toggle lo que hace es añadir o remover una clase en caso la encuentre o no
//   miContenedor.classList.toggle("brillo");
// }, 500);

// window.setInterval(function(){
//   console.log("Hola cada Segundo")
// },1000)

//Jugando con el titulo
// document.querySelector(".cuadrado")
// var h1 = document.querySelector("h1");
var h1 = document.getElementById("titulo");
console.log(h1);

h1.innerHTML = "<code>Título de mi H1</code>";

//Agregando Elementos (Nodos)

var cajaVacia = document.getElementById("cajavacia");

//createElement nos permite crear un nuevo Elemento HTML
var nuevoParrafo = document.createElement("p");

nuevoParrafo.innerHTML = "Hola soy un nuevo Párrafo";

cajaVacia.appendChild(nuevoParrafo);

//crea un nuevo elemento <img>
var imagen = document.createElement("img");

//setAttribute, modifica un atributo de un elemento HTML, por eso necesita dos argumentos setAttribute("queAtributo", "ElValorDelAtributo")
imagen.setAttribute("src","https://miro.medium.com/max/3840/0*oZLL-N4dGNlBe4Oh.png");

cajaVacia.appendChild(imagen);

imagen.style.width = "400px"
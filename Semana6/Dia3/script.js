//platillos
//1. El arreglo de objetos de donde vamos a obtener los platillos
//arreglo, API, todos tienen la misma estructura (propiedades)
var platillos = [
  {
    id:1,
    nombre:"Caldo Blanco",
    descripcion:"Caldo cocinado a partir de Apio, Cordero y Gallina, tradicional de Arequipa",
    precio: 15.00,
    stock: 20,
    imagen:"https://cde.peru.com//ima/0/1/8/4/2/1842580/380x300/arequipa.jpg"
  },
  {
    id:2,
    nombre:"triple",
    descripcion:"Rocoto Relleno, Pastel de Papa, Chicharron de Chancho",
    precio:40.00,
    stock:10,
    imagen:"https://1.bp.blogspot.com/-ehPgUGaU3Ao/UfcO-h2Ev4I/AAAAAAAADz0/Ih-zVYWyo78/s1600/DSC00434.jpg"
  },
  {
    id:3,
    nombre:"Escribano",
    descripcion:"Plato de entrada bastante picante a base de papa, rocoto, habas, tomate y aliño",
    precio:10.00,
    stock:15,
    imagen:"https://miqueridaarequipa.info/wp-content/uploads/2018/08/Escribano-plato-juridico-de-Arequipa.jpg"
  },
  {
    id:4,
    nombre:"Ceviche",
    descripcion:"Pescado cocinado a base de limón, plato tradicional del Perú",
    precio:25.00,
    stock:20,
    imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Cebiche_de_corvina.JPG/1200px-Cebiche_de_corvina.JPG"
  },
  {
    id:5,
    nombre:"Picante Cuy",
    descripcion:"Cuy, aji dorado, aderezado, acompañado de papas",
    precio:40.00,
    stock:6,
    imagen:"https://jameaperu.com/wp-content/uploads/2020/03/picante-de-cuy_700x464.jpg"
  }
]

function obtenerBotones() {
  var botonesPlatillos = document.getElementsByClassName("anadir");
  // console.log(botonesPlatillos)
  for(var j = 0; j < botonesPlatillos.length; j++){
    botonesPlatillos[j].addEventListener("click", function(){
      var idPlatillo = botonesPlatillos[j].getAttribute("id-platillo");
      console.log(idPlatillo);
    })
  }
  
}



//2. se va encargar de dibujar mis platillos en el HTML
//A partir de mi arreglo de platillos, necesito convertirlos a algo que el navegador pueda interpretar: objeto -> HTML
//2.1 Obtener donde voy a poner mis platillos en el HTML
var divplatillos = document.getElementById("divplatillos");
//2.2 Yo necesito un lugar donde guardar mis objetos platillos ya convertidos a HTML
var tarjetasPlatillos = "";

//2.3 Creo una función que recorra (con un for) mi arreglo de platillos y voy a obtener sus propiedades uno por uno
function imprimirPlatillos() {
   for(var i = 0; i < platillos.length; i++){
     //template string - https://carlosazaustre.es/ecmascript6
     //2.4 tarjetasPlatillos es un string, y lo que hago es cada vez que pase por un objeto de mi arreglo de platillos, voy a crear en forma de texto un <div> que contenga la información de mi platillo
     tarjetasPlatillos = tarjetasPlatillos + 
     `<div class="tarjetaplatillo">
        <h4>${platillos[i].nombre}</h4>
        <img class="imgplatillo" src="${platillos[i].imagen}">
        <p>${platillos[i].descripcion}</p>
        <label class="etiquetaplatillo" >Precio</label>
        <span>${platillos[i].precio}</span>
        <br>
        <label class="etiquetaplatillo">Stock</label>
        <span>${platillos[i].stock}</span>
        <button class="anadir" id-platillo="${platillos[i].id}">
          Añadir al Carrito
        </button>
      </div>`
      //**NT: al boton le he añadido una clase y una tributo id-platillo, la clase me servira para obtener todos los botones, después y poderles añadir un addEventListener y el atributo para poder obtener el id de cada platillo */
   }
   //2.5 añadirlo todo ese texto al contenido de divplatillos, esto los hacemos con innerHTML
   divplatillos.innerHTML = tarjetasPlatillos;
   obtenerBotones();
}
imprimirPlatillos();
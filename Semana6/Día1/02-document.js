//obtener elementos a partir del ID
var parrafo = document.getElementById("parrafo")

console.log(parrafo);

parrafo.style.color = "red";
parrafo.style.padding = "35px";

//obtener elementos a partir de la clase
var elementosSecundarios = document.getElementsByClassName("secundario");

console.log(elementosSecundarios);

//obtener elementos por su etiqueta
var misParrafos = document.getElementsByTagName("p");

console.log(misParrafos);

// for(var i = 0; i < misParrafos.length; i++){
//   misParrafos[i].style.border = "2px solid green"
// }

//obtener elementos utilizando un selector como el de CSS
// var query = document.querySelector("#parrafo")
var query = document.querySelector(".titulo")

console.log(query)

//si son varios
var queries = document.querySelectorAll(".secundario");

console.log(queries)
//setItem("nombre_clave","dato a guardar") , guardo algo
localStorage.setItem("nombre", "Juana Perez");

//getItem("nombre_clave"), obteniendo un dato del LocalStorage
var miNombre = localStorage.getItem("nombre");

console.log(miNombre);

var btnEliminar = document.getElementById("eliminar")

btnEliminar.addEventListener("click", function(){
  console.log("click!")
  localStorage.removeItem("nombre")
})
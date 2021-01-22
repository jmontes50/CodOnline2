//LocalStorage, solo guarda texto

//1. Obtenemos los elementos que necesitamos
var formulario = document.getElementById("registro")
var inputNombre = document.getElementById("nombre")
var inputApellido = document.getElementById("apellidos")
var inputEdad = document.getElementById("edad");

//2. Ponemos un eventListener
formulario.addEventListener("submit", function(evento){
  //En el caso de un ev submit, tengo que hacer un preventDefault para que no se recargue la pestaña
  evento.preventDefault();

  var objUsuario = {
    nombre: inputNombre.value,
    apellidos: inputApellido.value,
    edad: inputEdad.value
  }
  //imprimo el objeto
  console.log(objUsuario)
})


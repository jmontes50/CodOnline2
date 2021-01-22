//LocalStorage, solo guarda texto!!!!!! IMPORTANTE

//1. Obtenemos los elementos que necesitamos
var formulario = document.getElementById("registro")
var inputNombre = document.getElementById("nombre")
var inputApellido = document.getElementById("apellidos")
var inputEdad = document.getElementById("edad");

//2. Ponemos un eventListener
formulario.addEventListener("submit", function(evento){
  //En el caso de un ev submit, tengo que hacer un preventDefault para que no se recargue la pestaña
  evento.preventDefault();
  //obtenemos los valores de los input
  var objUsuario = {
    nombre: inputNombre.value,
    apellidos: inputApellido.value,
    edad: inputEdad.value
  }
  //imprimo el objeto
  // console.log(objUsuario)

  //3. me toca guardar los datos, pero para guardarlos voy a tener que convertirlos a texto
  //JSON, es ub objeto que existe dentro de JS
  var objATexto = JSON.stringify(objUsuario)
  // console.log(objATexto)

  //4. Como ya esta en Texto, lo guardo en el LocalStorage
  localStorage.setItem("usuario", objATexto)
})

//-------------------------------------------------

var btnVerUsuario = document.getElementById("verusuario");

btnVerUsuario.addEventListener("click", function(){
  var usuarioObtenido = localStorage.getItem("usuario");
  // console.log(usuarioObtenido)
  //Transformar texto a JS 
  //JSON.parse convierte texto a una estructura de Javascript
  var TextoAJavascript = JSON.parse(usuarioObtenido);
  console.log(TextoAJavascript);
})


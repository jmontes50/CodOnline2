let miBoton = document.getElementById("miboton");

let miModal = new bootstrap.Modal(document.getElementById("exampleModal"));

//aqui vamos a activar el método show() que encontramos en la documentación

miBoton.addEventListener("click", function(){
  miModal.show()
})

//utilizando setTimeout
//setTimeout ejecuta un codigo despues de X tiempo, setTimeout(funcion, tiempo_ms)
setTimeout(function(){
  miModal.show()
},1000)
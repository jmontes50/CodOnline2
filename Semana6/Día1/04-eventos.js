var miBoton = document.getElementById("boton");

//.addEventListener("Evento", funcion)
//El evento también es un objeto
miBoton.addEventListener("click", function(event){
  
  console.log(event)
  alert("Haz dado click!!!!");
})

var miLink = document.getElementById("link");

miLink.setAttribute("target","_blank");

miLink.addEventListener("click", function(evento){
  console.log(evento);
  evento.preventDefault();
  console.log("Click en el Link");
});

//------------------------------

var inputtexto = document.getElementById("inputtexto");
var btntexto = document.getElementById("botoninput");
var divLista = document.getElementById("lista");

btntexto.addEventListener("click", function(){
  console.log(inputtexto.value);
})


inputtexto.addEventListener("keyup", function(e){
  if(e.key === "Enter"){
    console.log("Enter!!!")
    var nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerHTML = inputtexto.value;
    divLista.appendChild(nuevoParrafo);
    inputtexto.value = "";
  }
})
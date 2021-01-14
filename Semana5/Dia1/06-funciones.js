function saludar(nombre, edad){
  var saludo = "Hola yo soy " + nombre + " y tengo " + edad + " años y me gusta el café";

  return saludo;
  //Todo lo que este debajo del return no se ejecutará  
  // console.log("Yo estoy después del return");
}
//ambito/scope lo que se declare dentro de una función existe ahi adentro
// console.log(saludo);

var miSaludo = saludar("Osmar", "veinte");

console.log(miSaludo);

//sin variables

var valor = 100; //variable global

function imprimirValor(){
  console.log(valor)
}

imprimirValor();


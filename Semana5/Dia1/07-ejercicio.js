//el objetivo de este ejercicio es que creen una función que permita recibir la base y la altura como argumentos y me retorne el área de un triángulo, según esos argumentos.

//1. obtener de alguna manera la base y la altura
//2.tener una función y dentro de esa funcion hacer la operacion
//3. retornar el resultado
//4. imprimir el resultado

//cuando yo reciba algo de prompt, siempre va a ser texto, entonces hay que pasarlo a un tipo de dato number
//para hacerlo añado un + antes de prompt
//+prompt
var base = +prompt("Ingrese la base del triangulo");
// console.log(base);
var altura = +prompt("Ingrese la altura");

function calcularArea(){
  var area = base * altura / 2;
  return area;
}

// console.log(calcularArea())

var miArea = calcularArea();
console.log(miArea);
var nombre = "Rosa";

var arreglo = [0,1,2,3,4,5];

console.log(arreglo.length);

console.log(nombre.length);

//PUSH- añade un item al final de mi arreglo
arreglo.push(20);

console.log(arreglo)

//TODO ES UN OBJETO
var bebida = new String("Margarita");

// console.log(typeof bebida);

// console.log(bebida);

//OBJETOS ESTANDAR
//instanciar
var today = new Date();

console.log(today);

console.log(today.getFullYear());

var fecha = new Date("Sat, 4 Feb 2012");

console.log(fecha);

//año,mes, dia, - detalle! en el caso del mes va de 0 a 11
var fecha2 = new Date(2021,0,6);

console.log(fecha2);

//cambiar a milisegundos,  1970-01-01
console.log(fecha2.getTime());
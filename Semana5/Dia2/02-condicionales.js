var sueldo = 2400;

if(sueldo > 2000){
  //aca pongo el codigo si es que la condición anterior se cumple, si es verdadera(true)
  console.log("Puedes comprar una PC");
}else{
  //aca pongo todo el codigo si es que la condición previa es falsa
  console.log("Es recomendable que ahorres");
}

//-------------------------------

var edad = 25;
// var edad = +prompt("Ingrese su edad");

//para que esta evaluación me de verdadero todas las condicionales que le doy tienen que dar verdadero
//Si EDAD es menor que 18 y si también EDAD es mayor o igual que 0
if(edad < 18 && edad >= 0){
  console.log("Tienes DNI amarillito");
}else if(edad >= 18){
  console.log("Tienes DNI azul");
}else{
  console.log("No ingrese valores extraños");
}

/* 
OPERADORES LOGICOS EN JS, para cuando se evaluan varias condicionales a la vez
&& - Y - AND - todo tiene que ser verdadero, basta que una sea falsa y todo sera falso
|| - O - OR - Basta que una de las condiciones sea verdadera para que la evaluación sea verdadera
*/

//---------

if("0" === 0){
  console.log("esto es un número");
}else{
  console.log("falso, esto no es número");
}

var numero = 0;

if(numero !== 0){
  console.log("Esto no es 0")
}else{
  console.log("Es 0");
}
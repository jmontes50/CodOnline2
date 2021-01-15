var contador = 1;

//mientras contador sea meno o igual que 10, ejecuta el codigo dentro de while
while(contador <= 10){
  console.log("El contador es igual a: " + contador);
  contador = contador + 2;
}

console.log("Yo estoy al final");

//---DO WHILE

var contador2 = 10;

do{
  console.log("El contador2 : " + contador2)
  contador2 = contador2 + 1;
  // contador2++;
}while(contador2 < 0);

//------

var estaAutenticado = false;

do{
  console.log("la autenticación es " + estaAutenticado);
  //login
}while(estaAutenticado === true);
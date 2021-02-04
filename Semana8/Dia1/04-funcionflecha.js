// function saludar(nombre){
//   return `Hola soy ${nombre}`
// }

//con funcion flecha () => 
// let saludar = (nombre) => {
//   return `Hola soy ${nombre}, pero en una función flecha`
// }

//si recibe 01 solo argumento, le puedo quitar los parentesis
// let saludar = nombre => {
//   return `Hola soy ${nombre}, pero en una función flecha`
// }

//si solamente vamos a retornar algo, de forma inmediata puedo obviar las llaves y ponerlas en una sola linea, obviando el return
let saludar = (nombre) => `Hola soy ${nombre} pero mas simple`


console.log(saludar("Jorge"))
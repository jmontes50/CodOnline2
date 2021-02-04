let objVehiculo = {
  marca:"Nissan",
  modelo:"Datsun",
  anio:1982,
  colores:["Gris","Azul"]
}

// console.log(objVehiculo.modelo)
// console.log(objVehiculo.marca)
// console.log(objVehiculo.anio)
// console.log(objVehiculo.colores)

//DESESTRUCTURACION
//let {propiedades de mi objeto} = elObjeto
let {marca, modelo, anio, colores} = objVehiculo

// console.log(modelo)
// console.log(marca)
// console.log(anio)
// console.log(colores)

//Spread Operator
//va a crear una copia de las propiedades y valores del objeto al que le aplique el spread operator
let copiaVehiculo = {...objVehiculo, placa:"VH-1456"}

console.log(copiaVehiculo)
console.log(objVehiculo)

//COMBINAR OBJETOS con Spread Operator 

let objPersona = {
  nombre:"Juan",
  edad:18,
  genero:"Masculino"
}

let objTrabajador = {
  cargo:"Ninja",
  empresa:"ACME",
  genero:"Femenino"
}

let empleado = {...objPersona, ...objTrabajador}

console.log(empleado)
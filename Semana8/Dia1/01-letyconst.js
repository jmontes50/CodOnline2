var manzana = "apple"
//var es muy insegura, tanto en ámbito como en su uso
var manzana = "manzana acaremalada"

console.log(manzana)

let potato = "papa amarilla"
//let es similar a var, pero mucho más seguro
// let potato = "puré de papas"

console.log(potato)

//for con var
for(var i = 0; i < 3; i++){
  console.log(i)
}
//yo puedo llamar aun variable declarada con var afuera de su bloque de codigo
console.log("contador con i ", i)

//for con let
for(let j = 0; j < 3; j++){
  console.log(j)
}
//yo no puedo llamar a un let fuera de un bloque de codigo
// console.log("contador con j ", j)

//CONST

const pi = 3.1415

// pi = 42

console.log(pi)

const nombre = "Wanda"

console.log(nombre)

//cambiando vcalor de let

let anio = 2020

anio = 2021

console.log(anio)
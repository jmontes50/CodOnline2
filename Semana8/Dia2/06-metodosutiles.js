let numeros = [20,10,15,60,85,11,16]
let nombres = ["Piero","Judyth","Marco"]

//.forEach(c_item, indice_c_item, arreglo_completo)
numeros.forEach((num, indice, arreglo)=>{
  // console.log(num)
  // console.log(indice)
  // console.log(arreglo)
})

//MAP - transformación

let otrosNumeros = [10,20,45,60]
//en la función que recibe map, yo tengo que retornar cada item transformado
let numerosTransformados = otrosNumeros.map((item)=>{
  return item / 2
})
console.log(numerosTransformados)

let lugares = ["Arequipa", "Lima", "Cañete", "Huancayo", "Piura"]

let lugaresMayus = lugares.map((ciudad)=>{
  let lugarMayus = ciudad.toLowerCase()
  return lugarMayus
})

// console.log(lugaresMayus)

//FILTER

let notas = [20, 19, 18, 14, 12, 13, 11, 06, 15]

let aprobados = notas.filter((item)=>{
  // if(item > 13){
  //   return item
  // }
  return item > 13
})

console.log(aprobados)
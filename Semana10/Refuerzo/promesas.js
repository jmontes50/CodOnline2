console.log("1. Juguemos Monopolio")

console.log("2. Toca Arca Comunal")

console.log("3. Me dio hambre!!")

let pedirPizza = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      // resolve("4. Una pizza!!!")
      reject("El rappi se comio la pizza")
    }, 2000)
  })
}

pedirPizza().then((respuesta) => {
  console.log(respuesta)
  console.log("5. seguimos jugando")
  console.log("6. paga el alquiler!")
}).catch((error) => {
  console.log(error)
  console.log("5. seguimos jugando")
  console.log("6. paga el alquiler!")
})



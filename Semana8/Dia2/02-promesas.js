let miHorno = () => {
  //para manejar la tarea asincrona de hornear vamos a utilizar promesas
  //la promesa tendra dentro una función, esa funcion recibira un resolve (si va bien) o reject (si va mal)
  return new Promise((resolve, reject) => {
    //Aquí voy a poner la tarea ques asincrona la que demora
    //para simular que la tarea demora, de forma artificial estoy poniendo un setTimeout
    setTimeout(()=>{
      //aca la idea es que haya una condicional una evaluación
      //si la evaluación fue bien, damos el resolve
      //si fue mal, damos el reject
      resolve("La torta esta ready") //fue bien
      // reject("la torta se quemo que sad")
    }, 5000)
  })
}
//ejecuto la función y le añado el .then() para saber si fue bien
//dentro del then tendre una función donde podre recibir el resultado
miHorno()
.then((resultado) => {
  console.log(resultado)
})
.catch((error) => {
  console.log(error)
})
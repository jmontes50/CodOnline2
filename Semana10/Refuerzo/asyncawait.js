console.log("1. Juguemos Monopolio");

console.log("2. Toca Arca Comunal");

console.log("3. Me dio hambre!!");

let pedirPizza2 = async () => {
  let aleatorio =  Math.random()
  console.log("El num es: ", aleatorio)
  if(aleatorio < 0.5){
    return "llego la pizza" //return = resolve
  }else{
    throw "el rappi se lo comio" //throw = reject
  }
}

// pedirPizza2().then((respuesta) => {
//   console.log(respuesta)
//   console.log("4. comamos y juguemos")
// })

let pediryjugar = async () => {
  try { //captura el return
    let respuesta = await pedirPizza2()//se pausa
    console.log(respuesta);
    console.log("4. comamos y juguemos");
  } catch (error) { //captura el throw
    console.log(":( im saaaaad")
  }
};
pediryjugar();

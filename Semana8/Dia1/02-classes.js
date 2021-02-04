//sintaxis: class Nombre_clase {}
class Gatete{
  //toda clase va a tener un constructor (asi sea no lo pongamos nosotros)
  //el método constructor va a ser lo primero que se va a ejecutar
  //los metodos de una clase van solamente con su nombre
  constructor(nombre, edad, raza, color, peso){
    //this.propiedad = valor
    this.name = nombre
    this.age = edad
    this.breed = raza
    this.colour = color
    this.weight = peso
  }
}
//creamos la variable 
//al utilizar la palabra "new" lo que hago es crear una nueva Instancia de mi clase
let Gato1 = new Gatete("Abby",7,"angora","blanco",2)

console.log(Gato1.colour)

let Gato2 = new Gatete("Colorina",4,"Carei","naranja",1.5)

console.log(Gato2.name)




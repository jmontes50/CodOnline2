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

  //un método es una función, una acción que puede realizar el objeto creado a partir de la función
  //nombre_metodo(args){}
  maullar(veces){
    console.log(`miau miau miaaaaauw ${veces} veces`)
  }

  cumpleanios(){
    this.age = this.age + 1
  }

  yomismo(){
    console.log(this)
  }
}
//creamos la variable 
//al utilizar la palabra "new" lo que hago es crear una nueva Instancia de mi clase
let Gato1 = new Gatete("Abby",7,"angora","blanco",2)
console.log(Gato1.colour)

let Gato2 = new Gatete("Colorina",4,"Carei","naranja",1.5)
console.log(Gato2.name)

//ejecutando el método maullar
Gato2.maullar(3)

Gato2.yomismo()

Gato1.yomismo()

// console.log(Gato1.age)

// Gato1.cumpleanios()

// console.log(Gato1.age)


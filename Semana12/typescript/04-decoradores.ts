function decorador(texto:string){
  //un decorador se usa para, modificar algo, agregar algo o inspeccionar algo
  return function(target){ //target representa lo que estamos modificando, en este caso representa a Persona
    target.prototype.saludar = function() { //aquí tengo que utilizar function()
      console.log(`Buen día voy a hacer compras con mis mascarilla ${texto}`)
    }
  }
}

@decorador(" y me llevo mi alcohol en spray")
class Persona {
  public nombre:string

  constructor(nombre:string){
    this.nombre = nombre
  }

  saludar(texto:string){
    console.log(`Hola que tal, como van yo soy ${this.nombre} ${texto}`)
  }
}

let Jhonny = new Persona("Jhonny")

Jhonny.saludar("y quiero salir")
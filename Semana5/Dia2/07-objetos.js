var perro = {
  nombre: "Backus",
  edad: 12,
  color: "Blanco",
  hobbies:["Dormir","Persigue Gatos","Ladra"],

  jugar: function(){
    //backus coge su pelota
    //backus la muerde
    //backus la babea
    console.log("Backus juega");
  }
}

console.log(perro.nombre);
console.log(perro.color);

perro.edad = 13;

console.log(perro.edad);

console.log(perro.hobbies[0]);
console.log(perro.hobbies[2]);

perro.color = "Blanco y Café"

perro.jugar();

var aleatorio = Math.random()

console.log(aleatorio)


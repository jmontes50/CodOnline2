var album_musica = {
  nombre:"Californication",
  banda:"Red Hot Chilli Peppers",
  productora:"EMI",
  anio:1999,
  canciones:[
    {
      titulo:"Scar Tissue",
      duracion:3.37
    },
    {
      titulo:"Around the World",
      duracion:3.59
    }
  ]
}

//restaurante
//mesas, mobiliario, utencilios, platillos, local, personal
var restaurante = {
  nombre: "Ka hing",
  direccion: "Av. Dolores",
  cantidad_mesas: 20,
  personal:["Meseros","Cajera","Administradora","Chef","Ayudante de cocina","Seguridad"],
  gerente:{
    nombre:"Juan Perez",
    edad:36,
    profesion:"Chef"
  },
  platillos:[
    {
      id:1,
      nombre:"Pollo Tipakay",
      descripcion:"Arroz chaufa con Pollo Agridulce y Wantan Frito",
      precio:22.00
    },
    {
      id:2,
      nombre:"Sopa Wantan Especial",
      descripcion:"Caldo de Pollo con Verduras, tipos de carne, Wantan y huevitos de codorniz",
      precio:15.00
    }
  ],
  //métodos
  mostrar_info: function(){
    console.log("El chifa KA HING en la Av. Dolores dispone de 20 mesas")
  },
  mostrar_platillos:function(){
    console.log(restaurante.platillos)
  }
}

//probando los objetos
console.log(restaurante.gerente.nombre);

console.log(restaurante.platillos[1].descripcion);

restaurante.mostrar_info();

restaurante.mostrar_platillos();
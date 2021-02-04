class Bodega {
  //definición de propiedades (aunque no es obligatorio)
  nombre
  direccion
  productos
  //constructor(), el cosntructor se ejecuta apenas se contrusye mi objeto
  constructor(name, address) {
    //this va a hacer referencia al objeto creado a partir de la clase
    this.nombre = name
    this.direccion = address
    //estoy diciendo que todas las bodegas que voy a crear
    //no van a tener productos
    this.productos = []
    //un metodo, puede utilizar otro metodo
    this.mostrarInfo()
  }

  mostrarInfo(){
    console.log(this.nombre)
  }
  //encapsulamiento
  agregarProducto(productoNuevo){
    this.productos.push(productoNuevo);
    console.log("Producto agregado existosamente")
  }
}

let miBodega = new Bodega("De Don Pepé", "Av. Dolores")

// miBodega.mostrarInfo()

//Modificar directamente el objeto esta mal
// console.log(miBodega.productos)
// //estoy modificando directamente la propuiedad productos
// miBodega.productos = ["Arroz","Pollo","Inca Kola"]

// console.log(miBodega.productos)

// //agregardueño
// miBodega.duenio = "El Pepé"

// console.log(miBodega)

miBodega.agregarProducto("Arroz")
miBodega.agregarProducto("Chocolates")

console.table(miBodega)

let otraBodega = new Bodega("Norka","Parque los palotes")

console.table(otraBodega)


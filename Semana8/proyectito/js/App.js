let network = new Network()
let interface = new Interface()
let btnModal = document.getElementById("btnAgregarModal")

let getProductos = () => {
  //1. se ejecuta Network con obtener Productos y me devuelve el arreglo de Objetos Producto de mockAPI
  network.obtenerProductos()
  .then(productos => { //aca tengo el arreglo de Productos
    // console.table(productos) 
    //despues ese arreglo de productos, se lo paso a imprimir Productos
    interface.imprimirProductos(productos)
  })
  .catch(error => console.log(error))
}
getProductos()

//obteniendo Modal
let modal = new bootstrap.Modal(document.getElementById("modalProducto1"))

//Abriendo el modal
btnModal.addEventListener("click", ()=>{
  modal.show();
})
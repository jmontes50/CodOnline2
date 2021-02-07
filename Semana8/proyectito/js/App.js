let network = new Network()
let interface = new Interface()
let btnModal = document.getElementById("btnAgregarModal")
let btnGuardar = document.getElementById("btnGuardar")

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

//mediante ese btnGuardar voy a utilizar crearProducto de network para guardar un nuevo Producto
btnGuardar.addEventListener("click",()=>{
  //voy a obtener el formulario del HTML
  let formulario = document.getElementById("formcrearproducto")
  //obtengo el value por el name --> formulario["name"].value
  let nuevoProducto = new Producto(formulario["producto_nombre"].value ,
                                    formulario["producto_descripcion"].value ,
                                    formulario["producto_precio"].value ,
                                    formulario["producto_imagen"].value)

  network.crearProducto(nuevoProducto)
  .then(productoCreado => {
    // console.log(productoCreado)
    //reset me limpia los input del formulario
    formulario.reset()
    //CERRAMOS EL MODAL
    modal.hide()
    //Despuies que creamos un nuevo producto, obtenemos los productos actualizados y los imprimo de nuevo en el HTML
    getProductos()
  })
  .catch(error => console.log(error))
})
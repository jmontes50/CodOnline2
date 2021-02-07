let network = new Network()
let interface = new Interface()

let getProductos = () => {
  network.obtenerProductos()
  .then(productos => {
    console.table(productos)
  })
  .catch(error => console.log(error))
}

getProductos()
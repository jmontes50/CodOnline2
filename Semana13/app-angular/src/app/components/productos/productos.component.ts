import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  misProductos:Array<any> //Es donde voy a almacenar el resultado de la peticion
  subscripcionProductos: Subscription //subscribir y desubscribir

  //recuerden, la inyeccion por dependencias se hace en el constructor
  constructor(
    private _sProducto: ProductoService
  ) { }

  obtenerProductos(){
    this.subscripcionProductos = this._sProducto.getProductos()
    .subscribe((datos) => {
      // console.log(datos)
      this.misProductos = datos
      console.log(this.misProductos)
    })
  }

  ngOnInit(): void {
    //este método es el equivalente a un useEffect([])
    //es el lugar para hacer peticiones y obtener datos
    this.obtenerProductos()
  }

  borrarProducto(producto){
    // console.log(producto)
    this._sProducto.deleteProducto(producto.id)
    //la 1era funcion del subscribe equivaldria
    //al .then()
    .subscribe(() => {
      alert("Producto Eliminado")
      this.obtenerProductos()
    },
    //la 2da funcion que reciba subscribe, será
    //para manejar el error que pueda ocurrir - equivaldría al catch()
    (error) => {
      console.log(error)
      alert("Hubo un error al eliminar")
      //volvemos a solicitar todos nuestros productos para que se actualice la lista
      this.obtenerProductos()
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service'
import Swal from "sweetalert2"

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css']
})
export class CrearproductoComponent implements OnInit {

  nuevoProducto:any = {
    nombre:'',
    descripcion:'',
    imagen:''
  }
  //inyeccion de dependencias del servicio ProductoService
  constructor(private _sProducto:ProductoService) { }

  ngOnInit(): void {
  }

  crearTarea(){
    // console.log(this.nuevoProducto)
    this._sProducto.createProducto(this.nuevoProducto)
    .subscribe(() => {
      // alert("Nuevo Producto Creado")
      Swal.fire({
        title:"Producto Creado",
        icon:"success",
        timer:2000,
        showConfirmButton:false
      })
      //es el mismo uso que en react, podemos capturar la rpta y demás para hacer lo mismo que haciamos en react
    })
  }

}

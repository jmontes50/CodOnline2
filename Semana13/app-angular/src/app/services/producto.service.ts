import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  //este servicio tenga las peticiones para hacer un get, post, put, delete

  url:string = "https://601e0117be5f340017a1a114.mockapi.io/productos"

  //inyeccion por dependencias,
  //Al hacer inyeccion por dependencias, es como si yo tuviera una propiedad con el nombre de la inyeccion
  //dentro de mi clase
  constructor(private _sHttp:HttpClient ) {}

  getProductos(): Observable<any>{
    // .get(URL) necesita la URL como parametro
    return this._sHttp.get(this.url)
  }

  createProducto(nuevoProducto:any):Observable<any> {
    //.post(url, datos_a_enviar)
    return this._sHttp.post(this.url, nuevoProducto)
  }

  deleteProducto(id:string):Observable<any>{
    //esto va a utiulizar el HttpCliente previo para hacer una peticion de tipo delete
    return this._sHttp.delete(`${this.url}/${id}`)
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //interporacion
  titulo = "Hola Tarjeta"

  //property binding
  src = "https://picsum.photos/200"

  nombre = ""

  //event binding
  abrirAlerta(){
    alert("mensaje desde la tarjeta " + this.nombre)
  }
}

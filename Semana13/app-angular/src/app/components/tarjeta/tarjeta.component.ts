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

  titulo = "Hola Tarjeta"

  src = "https://picsum.photos/200"

  abrirAlerta(){
    alert("mensaje desde la tarjeta")
  }
}

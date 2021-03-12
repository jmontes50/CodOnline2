import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter 
} from '@angular/core';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {
  //cuando queremos recibir datos de un componente padre
  //tenemos que utilizar Input
  @Input() prod:any //es un objeto por cada item que viene desde la API
  @Output() productoClick: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    // console.log(this.prod)
  }

  borrar(){
    this.productoClick.emit(this.prod)//emite un evento
  }

}

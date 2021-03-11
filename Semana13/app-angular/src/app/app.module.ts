import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//aquí importamos las cosas que vayamos necesitando
import {MicomponenteComponent} from "./components/micomponente/micomponente.component";
import { NavbarComponent } from './components/navbar/navbar.component'

@NgModule({
  declarations: [
    // aca ván todos los componentes
    AppComponent,
    MicomponenteComponent,
    NavbarComponent
  ],
  imports: [
    //Van a ir los modulos que vamos a utilizar
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],//servicios, proveedores de datos
  bootstrap: [AppComponent]//es el componente con el que va a iniciar, equivale a un App.js
})
export class AppModule { } //es un archivo donde hay que registrar/matricular todo lo que contenga NUESTRA APLICACIÓN

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
  heroes: string [] = ['Spiderman','Thor','Iroman','Capitan America']
   h:string = "";

  borrarHeroe(){
    this.h = this.heroes.shift() || ''; //Borrar el primer elemento de la cadena
    console.log(this.h);
  }

}

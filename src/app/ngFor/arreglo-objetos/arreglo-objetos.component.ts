import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../modelos/alumno.model'

@Component({
  selector: 'app-arreglo-objetos',
  templateUrl: './arreglo-objetos.component.html',
  styleUrls: ['./arreglo-objetos.component.css']
})
export class ArregloObjetosComponent implements OnInit {
  
  public alumnos:Alumno[] = [
    {id: 1, nombre:'Jesus Alonso', apellidos:'Valenzuela Rangel', ciudad:'Guasave'},
    {id: 2, nombre:'Narda Guadalupe', apellidos:'Loredo Buelna', ciudad:'Guasave'}
  ]






  constructor() { }

  ngOnInit() {
  }

}

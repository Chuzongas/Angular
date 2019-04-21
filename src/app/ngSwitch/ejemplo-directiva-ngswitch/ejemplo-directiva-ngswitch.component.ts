import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-directiva-ngswitch',
  templateUrl: './ejemplo-directiva-ngswitch.component.html',
  styleUrls: ['./ejemplo-directiva-ngswitch.component.css']
})
export class EjemploDirectivaNgswitchComponent implements OnInit {

  jugadores:any = [
    {nombre:'Jesus Alonso', equipo:'Angular 7'},
    {nombre:'Narda Guadalupe', equipo:'Los leiikers:0'},
    {nombre:'Joel', equipo:'Los leiikers:0'}
  ]




  constructor() { }

  ngOnInit() {
  }

}

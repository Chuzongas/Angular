import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-directiva-ngsstyle',
  templateUrl: './ejemplo-directiva-ngsstyle.component.html',
  styleUrls: ['./ejemplo-directiva-ngsstyle.component.css']
})
export class EjemploDirectivaNgsstyleComponent implements OnInit {

  puntuacion:number;

  setColor(){
    return this.puntuacion > 4 ? 'green':'red';
  }






  constructor() { }

  ngOnInit() {
  }

}

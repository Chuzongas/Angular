import { Component, OnInit } from '@angular/core';

import { Alumno } from '../modelos/alumno.model';

@Component({
  selector: 'app-viewmodelos',
  templateUrl: './viewmodelos.component.html',
  styleUrls: ['./viewmodelos.component.css']
})
export class ViewmodelosComponent implements OnInit {

  alumno1:Alumno = new Alumno(1, 'Jesus Alonso', 'Valenzuela Rangel','Guasave');
  




  constructor() { }

  ngOnInit() {
  }

}

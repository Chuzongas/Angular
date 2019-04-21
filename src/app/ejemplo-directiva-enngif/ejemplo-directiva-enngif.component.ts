import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-directiva-enngif',
  templateUrl: './ejemplo-directiva-enngif.component.html',
  styleUrls: ['./ejemplo-directiva-enngif.component.css']
})
export class EjemploDirectivaENNGIFComponent implements OnInit {

  nombre:string;
  nombreBueno:string = 'Chuz';
  capital:string;

  setResultado(){
    return this.capital === 'Madrid' ? true : false;
  }


  constructor() { }

  ngOnInit() {
  }

}

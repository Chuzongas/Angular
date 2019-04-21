import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-directuvaiva-egfor',
  templateUrl: './ejemplo-directuvaiva-egfor.component.html',
  styleUrls: ['./ejemplo-directuvaiva-egfor.component.css']
})
export class EjemploDirectuvaivaEgforComponent implements OnInit {

  cursos:string[];
  constructor() {
    this.cursos = ['Angular','Mi curso','Omg']
   }

  ngOnInit() {
  }

}

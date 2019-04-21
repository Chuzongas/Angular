import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejeventbinding',
  templateUrl: './ejeventbinding.component.html',
  styleUrls: ['./ejeventbinding.component.css']
})
export class EjeventbindingComponent implements OnInit {

  texto:string = 'Modificame';

  public modTexto(){
    this.texto = "Me modificaste aaaaaa"
  }


  constructor() { }

  ngOnInit() {
  }

}

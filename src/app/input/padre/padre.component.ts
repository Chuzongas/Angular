import { Component, OnInit } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  public avisos:string[] = ['Hola','Como','Estas']
  texto:string;




  constructor() { }

  ngOnInit() {
  }

}

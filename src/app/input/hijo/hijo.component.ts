import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() aviso:string;
  leido:boolean = false;





  public leer(){
    this.leido = true;
  }

  public desleer(){
    this.leido = false;
  }



  constructor() { }

  ngOnInit() {
  }

}

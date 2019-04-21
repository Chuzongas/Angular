import { Directive } from '@angular/core';

import { ElementRef, Input, Renderer, HostListener } from '@angular/core';
import { bloomHashBitOrFactory } from '@angular/core/src/render3/di';



@Directive({
  selector: '[Menuitem]'
  
})

export class MenuItemDirective {
 
  constructor(
    public el:ElementRef,
    public renderer:Renderer
  ) { }

  @HostListener('mouseenter') onmouseenter(){
    this.hover(true)
  }
  @HostListener('mouseleave') onmouseleave(){
    this.hover(false)
  }

  @Input() color:string;

  hover(color:boolean){
    if(color == true){
      this.renderer.setElementStyle(this.el.nativeElement,'color',this.color)
    }
    else{
      this.renderer.setElementStyle(this.el.nativeElement,'color',"")
    }
  }
}

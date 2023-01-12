import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core'; //serve a pescare un elemento dell'html

@Directive({
  selector: '[appColora]'
})
export class ColoraDirective {

  @Input() defaultColor: string = "red";
  @Input("appColora") newColor: string = "black";

  @HostBinding('style.color') color: string = 'black';
  

  constructor() { }

}
//host listener ascolta quale elemento del dom stiamo chiamando, e con host binding
//fa il collegamento dei dati

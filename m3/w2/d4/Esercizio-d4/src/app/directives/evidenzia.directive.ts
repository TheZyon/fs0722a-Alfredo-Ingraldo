import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEvidenzia]'
})
export class EvidenziaDirective {

  constructor(private el: ElementRef) {

    this.el.nativeElement.style.backgroundColor = "yellow";

  }

}

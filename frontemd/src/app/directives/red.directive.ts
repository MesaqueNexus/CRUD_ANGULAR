import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[colorRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = '#e35e6b'
   }

}

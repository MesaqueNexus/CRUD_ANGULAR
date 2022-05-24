import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[colorBlue]'
})
export class BlueDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.background = '#3f51b'
   }

}

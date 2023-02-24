import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[type=password][uclRevealPassword]'
})
export class RevealPasswordDirective {

  @HostBinding('attr.type') type = 'password';

  @HostListener('dblclick')
  reveal() {
    this.type = (this.type == 'text') ? 'password' : 'text';
  }

}

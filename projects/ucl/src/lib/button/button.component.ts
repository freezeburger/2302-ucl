import { Component, Input } from '@angular/core';

@Component({
  selector: 'ucl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() disabled = false;
}

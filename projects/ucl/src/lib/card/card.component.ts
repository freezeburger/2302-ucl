import { Component, Input } from '@angular/core';

@Component({
  selector: 'ucl-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() cardTitle = '';
}

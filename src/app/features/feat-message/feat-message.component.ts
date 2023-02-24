import { Component } from '@angular/core';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-feat-message',
  templateUrl: './feat-message.component.html',
  styleUrls: ['./feat-message.component.scss']
})
export class FeatMessageComponent {
  constructor(
    public messageService:MessageService
  ) {
   
  }
}

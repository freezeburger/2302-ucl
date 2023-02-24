import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-feat-message',
  templateUrl: './feat-message.component.html',
  styleUrls: ['./feat-message.component.scss']
})
export class FeatMessageComponent implements OnInit {
  constructor(
    public messageService: MessageService
  ) { }

  public filterTitle = '';

  ngOnInit(): void {
    const command = this.messageService.createCommand('LOAD', null);
    this.messageService.execute(command);
  }


}

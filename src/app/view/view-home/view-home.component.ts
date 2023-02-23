import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss']
})
export class ViewHomeComponent {

  public handlePause( pauseState:boolean ){
    console.warn( 'Processes stopped : ' + pauseState );
  }

}

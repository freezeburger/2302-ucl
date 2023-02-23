import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ucl-router-nav',
  templateUrl: './router-nav.component.html',
  styleUrls: ['./router-nav.component.css']
})
export class RouterNavComponent {
  
  constructor(
    public route:ActivatedRoute,
    public router:Router,
  ){}
}

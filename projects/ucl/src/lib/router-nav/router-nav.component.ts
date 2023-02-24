import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ViewTemplateComponent } from '../view-template/view-template.component';

@Component({
  selector: 'ucl-router-nav',
  templateUrl: './router-nav.component.html',
  styleUrls: ['./router-nav.component.css']
})
export class RouterNavComponent {
  
  constructor(
    public activeRoute:ActivatedRoute,
    public router:Router,
  ){
    console.log(
      /*       
      this.activeRoute.routeConfig?.path,
      (this.activeRoute.parent as any).routeConfig['_loadedRoutes'],
      this.activeRoute.parent?.snapshot.pathFromRoot 
      */
      );
      /* 
      (this.activeRoute.parent as any).routeConfig['_loadedRoutes'].push(
        {path:'hello', component:ViewTemplateComponent}
      ) 
      */
  }

  get routes(){
    return  (this.activeRoute.parent as any).routeConfig['_loadedRoutes'].filter( (r:Route) => r.component)
  }
}

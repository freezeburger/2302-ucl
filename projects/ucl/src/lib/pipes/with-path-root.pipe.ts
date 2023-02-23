import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

@Pipe({
  name: 'withPathRoot'
})
export class WithPathRootPipe implements PipeTransform {

  constructor(
    private router:Router
  ) { }

  get routeSegment(){
    return this.router.url.split('/')[1]
  }

  transform( path: string ): string {
    const rootPath = this.routeSegment ? `/${this.routeSegment}`:'';
    return `${rootPath}/${path}`;
  }

}

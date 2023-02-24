import { Pipe, PipeTransform } from '@angular/core';
import { FuncMessage } from 'src/app/core/interfaces/functional/message';

@Pipe({
  name: 'sortByTitle'
})
export class SortByTitlePipe implements PipeTransform {

  transform(messages:FuncMessage[] , title:string): FuncMessage[] {
    if(!title) return messages;
    return messages.filter( msg => msg.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()) )
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(values: any[], search: any): any {

    if(!values || !search) {
      return values ;
    }

    return values.filter(item => 
      
      item.FirstName.toLowerCase().indexOf(search.toLowerCase()) !== -1    )   ;
  }

}
 
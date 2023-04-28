import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabetical'
})
export class AlphabeticalPipe implements PipeTransform {

  transform(array: any[]): any[] {
    if (!Array.isArray(array)) {
      return array;
    }
    
    return array.sort((a, b) => a.localeCompare(b));
  }
}


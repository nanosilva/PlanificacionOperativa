import { Pipe, PipeTransform } from '@angular/core';
import { TrazadorasComponent } from './components/trazadoras/trazadoras.component';

@Pipe({
  name: 'unique',
  pure: false,
})
export class UniquePipe implements PipeTransform {
  transform(value: any): any {
    if (value !== undefined && value !== null) {
      return Array.from(new Set(value));
    } else {
      return value;
    }
  }

}

  



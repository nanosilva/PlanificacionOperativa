import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique2'
})
export class Unique2Pipe implements PipeTransform {

  transform(value: any[], key: string): any[] {
    if (!Array.isArray(value) || value.length === 0) {
      return value;
    }

    const uniqueValues = [];
    const seenValues = new Set();

    for (const item of value) {
      const valueKey = item[key];

      if (!seenValues.has(valueKey)) {
        seenValues.add(valueKey);
        uniqueValues.push(item);
      }
    }

    return uniqueValues;
  }

}

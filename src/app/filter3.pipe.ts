import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter3'
})
export class Filter3Pipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    if(!searchText) {
      return value;
    }
    return value.filter((data: any) => this.matchValue(data,searchText)); 
  }

  matchValue(data: { [x: string]: string; }, value: string | RegExp) {
    return Object.keys(data).map((key) => {
       return new RegExp(value, 'gi').test(data[key]);
    }).some(result => result);
  }
 }
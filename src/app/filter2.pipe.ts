import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(value: any=[], arg: any):any {
    if (arg === "" || arg.length < 3) return value;
    const resultPost2=[];
    for (const rendicion of value){
      if (rendicion.fecha_ult_expte.toLowerCase().indexOf(arg)> -1){
        console.log('sip');
        resultPost2.push(rendicion);
       };
    };
    return resultPost2;
  }
}

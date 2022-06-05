import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any=[], arg: any):any {
    if (arg === "" || arg.length < 3) return value;
    const resultPost=[];
    for (const rendicion of value){
      if (rendicion.municipio.toLowerCase().indexOf(arg)> -1){
        console.log('sip');
        resultPost.push(rendicion);
       };
    };
    return resultPost;
  }

}

import { Pipe, PipeTransform } from '@angular/core';


/* usage

{{value|upperCase: exponent}}


*/

@Pipe({
  name: 'upper'
})
export class UppercasePipe implements PipeTransform {

  transform(value:number, exponent=1 ): number {
    return Math.pow(value, exponent);
  }

}

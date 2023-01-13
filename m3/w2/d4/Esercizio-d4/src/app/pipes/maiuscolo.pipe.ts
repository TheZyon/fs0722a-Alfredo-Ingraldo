import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maiuscolo'
})

export class MaiuscoloPipe implements PipeTransform {

  transform(value: string): string {
    return value.toLocaleUpperCase();
  }

}

//{ciccio | maiuscolo }

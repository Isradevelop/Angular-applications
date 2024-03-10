import { Pipe, type PipeTransform } from '@angular/core';
import { Cuc } from '../interfaces/country.interface';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipeTsPipe implements PipeTransform {

  transform(value: Cuc): string {

    return `${value.name}( ${value.symbol} ).`;
  }

}

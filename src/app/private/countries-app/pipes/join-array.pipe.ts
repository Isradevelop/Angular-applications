import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinArrayPipe'
})
export class JoinArrayPipeTsPipe implements PipeTransform {

  transform(value: string[], separator: string = ' '): string {

    return value?.length > 0 ? value.join(separator) : '';
  }

}

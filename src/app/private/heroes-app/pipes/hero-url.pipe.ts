import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImageUrlPipe'
})
export class HeroUrlPipe implements PipeTransform {

  transform(hero: Hero): string {

    if (hero.alt_img) return hero.alt_img

    return (!hero.id && !hero.alt_img) ? 'assets/no-image.png' : `assets/heroes/${hero.id}.jpg`;
  }

}

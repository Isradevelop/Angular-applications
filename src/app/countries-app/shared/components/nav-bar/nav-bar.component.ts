import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Regions } from '../../../interfaces/navBarTypes.interface';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Input() initialRegion!: Regions;
  @Input() navBarNames: Regions[] = [];
  @Output() emitRegionEvent = new EventEmitter<Regions>();
  @Output() sortByEvent = new EventEmitter<'country' | 'capital'>();
  public region: Regions = '';

  searchRegion(region: Regions) {
    this.emitRegionEvent.emit(region);
    this.region = region;
  }

  sortBy(sortBy: 'country' | 'capital') {
    this.sortByEvent.emit(sortBy);
  }

}

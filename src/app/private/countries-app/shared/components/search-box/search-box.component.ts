import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @Input({ required: true }) initialValue!: string;
  @Input({ required: true }) placeholder!: string;
  @Output() valueSearchEvent = new EventEmitter<string>();
  @Output() isTouchedEvent = new EventEmitter<void>();

  searchValue(value: string) {
    this.valueSearchEvent.emit(value);
    this.isTouchedEvent.emit();
  }
}

import { Component, Input, OnChanges, SimpleChanges, input } from '@angular/core';
import { LayoutAlert } from '../../interfaces/layout-alert.interface';

@Component({
  selector: 'app-layout-alert',
  templateUrl: './layout-alert.component.html',
  styleUrl: './layout-alert.component.css'
})
export class LayoutAlertComponent {
  @Input({ required: true }) alertContent!: LayoutAlert;
}

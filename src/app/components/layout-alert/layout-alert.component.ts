import { Component, Input, OnChanges, SimpleChanges, input } from '@angular/core';
import { LayoutAlert } from '../../shared/interfaces/layout-alert.interface';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-layout-alert',
  imports: [CommonModule],
  templateUrl: './layout-alert.component.html',
  styleUrl: './layout-alert.component.css'
})
export class LayoutAlertComponent {
  @Input({ required: true }) alertContent!: LayoutAlert;
}

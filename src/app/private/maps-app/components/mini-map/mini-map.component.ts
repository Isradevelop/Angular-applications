import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild, signal } from '@angular/core';
import { Map, Marker, Popup } from 'mapbox-gl';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) lngLat!: [number, number];
  @ViewChild('map') divMap?: ElementRef;

  public zoomLevel = signal<number>(10);
  public map?: Map;

  ngAfterViewInit(): void {
    if (!this.divMap) {
      console.error('El elemento HTML no fuen encontrado');
      return;
    }

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoomLevel(), // starting zoom
      interactive: false
    });

    const marker = new Marker({
      color: 'violet',
      draggable: true
    })
      .setLngLat(this.lngLat)
      .addTo(this.map);
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }
}

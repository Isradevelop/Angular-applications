import { AfterViewInit, Component, ElementRef, ViewChild, signal } from '@angular/core';
import { Map, Marker, Popup, LngLat } from 'mapbox-gl';

@Component({
  selector: 'app-fly-to',
  templateUrl: './fly-to.component.html',
  styleUrl: './fly-to.component.css'
})
export class FlyToComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;

  public zoomLevel = signal<number>(3);
  public map?: Map;
  public latitude: number = 36.71663894181687;
  public longitude: number = -4.431884153817691;

  ngAfterViewInit(): void {
    if (!this.divMap) {
      console.error('El elemento HTML no fuen encontrado');
      return;
    }

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
      center: [this.longitude, this.latitude], // starting position [lng, lat]
      zoom: this.zoomLevel(), // starting zoom
    });


    // Fly to the center of click
    this.map.on('click', (ev) => {
      if (!this.map) return

      const center = ev.lngLat;
      const { lng, lat } = center;

      this.flyTo([lng, lat], 12.5, 130, 75);
    })

  }

  zoomOut() {
    if (!this.map) return;
    const center = this.map?.getCenter();
    const { lng, lat } = center;
    this.flyTo([lng, lat], 1, 0, 0);
  }

  flyTo(center: [lng: number, lat: number], zoom: number, bearing: number, pitch: number): void {
    if (!this.map) return

    this.map.flyTo({
      center,
      zoom,
      bearing,
      pitch,
      duration: 12000, // Animate over 12 seconds
      essential: true // This animation is considered essential with
    });
  }

}

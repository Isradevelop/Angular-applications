import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, signal } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-page',
  templateUrl: './zoom-page.component.html',
  styleUrl: './zoom-page.component.css'
})
export class ZoomPageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') divMap?: ElementRef;

  public zoomLevel = signal<number>(10);
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
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [this.longitude, this.latitude], // starting position [lng, lat]
      zoom: this.zoomLevel(), // starting zoom
    });

    this.map.setMaxZoom(18);

    this.mapListeners()
  }

  ngOnDestroy(): void {
    // delete map and map listeners
    this.map?.remove();
  }

  mapListeners() {
    if (!this.map) throw new Error('Not inicialiced map');

    this.map.on('zoom', (ev) => {
      this.zoomLevel.set(this.map!.getZoom());
      this.longitude = this.map!.getCenter().lng;
      this.latitude = this.map!.getCenter().lat;
    })

    this.map.on('move', () => {
      this.longitude = this.map!.getCenter().lng;
      this.latitude = this.map!.getCenter().lat;
    })
  }

  zoomIn() {
    if (!this.map) throw new Error('Not inicialiced map');

    this.map.zoomIn();
  }

  zoomOut() {
    if (!this.map) throw new Error('Not inicialiced map');

    this.map.zoomOut();
  }

  setZoom(value: string) {
    this.map?.zoomTo(parseInt(value))
  }
}

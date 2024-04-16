import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, signal } from '@angular/core';
import { Map, Marker, Popup, LngLat } from 'mapbox-gl';

@Component({
  selector: 'app-fly-to',
  templateUrl: './fly-to.component.html',
  styleUrl: './fly-to.component.css'
})
export class FlyToComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') divMap?: ElementRef;

  public zoomLevel = signal<number>(3);
  public map?: Map;
  public latitude: number = 36.71663894181687;
  public longitude: number = -4.431884153817691;
  public parametersZoomIn = { zoom: 12.5, bearing: 130, pitch: 75 };
  public parametersZoomOut = { zoom: 1, bearing: 0, pitch: 0 };

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
      const { zoom, bearing, pitch } = this.parametersZoomIn;
      this.flyTo([lng, lat], zoom, bearing, pitch);
    })

  }

  // delete listeners(map)
  ngOnDestroy(): void {
    this.map?.remove();
  }

  zoomOut(): void {
    if (!this.map) return;
    const center = this.map?.getCenter();
    const { lng, lat } = center;
    const { zoom, bearing, pitch } = this.parametersZoomOut;
    this.flyTo([lng, lat], zoom, bearing, pitch);
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

    this.map.on('style.load', () => {
      if (!this.map) return

      // Custom atmosphere styling
      this.map.setFog({
        'color': 'rgb(220, 159, 159)', // Pink fog / lower atmosphere
        'high-color': 'rgb(36, 92, 223)', // Blue sky / upper atmosphere
        'horizon-blend': 0.4 // Exaggerate atmosphere (default is .1)
      });

      this.map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.terrain-rgb'
      });

      this.map.setTerrain({
        'source': 'mapbox-dem',
        'exaggeration': 1.5
      });
    })
  }

  flyToCoordinates(lng: string, lat: string): void {
    if (lng.trim().length < 1 || lat.trim().length < 1) return
    const { zoom, bearing, pitch } = this.parametersZoomIn;
    this.flyTo([parseInt(lng), parseInt(lat)], zoom, bearing, pitch);
  }

}

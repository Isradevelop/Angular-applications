import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, signal } from '@angular/core';
import { Map, Marker, Popup } from 'mapbox-gl';

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') divMap?: ElementRef;

  public zoomLevel = signal<number>(10);
  public map?: Map;
  public latitude: number = 36.71663894181687;
  public longitude: number = -4.431884153817691;
  public markers: Marker[] = [];

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

    // initial marker
    this.createMarker({ lng: -4.431884153817691, lat: 36.71663894181687 }, `<h2>Málaga</h2>`, 'red')

    // onClick, create marker
    this.map.on('click', (ev) => {
      const center = ev.lngLat;
      const { lng, lat } = center;

      this.createMarker(center, `<h3>Lng: ${lng}, Lat: ${lat}</h3>`, 'green');
    })

  }

  // delete markers and listeners(map)
  ngOnDestroy(): void {
    this.map?.remove();

    this.markers.forEach((marker) => {
      marker.remove();
    })
  }

  addMarkerInCenter() {
    if (!this.map) return

    const center = this.map.getCenter();
    const { lng, lat } = center;

    this.createMarker(center, `<h3>Lng: ${lng}, Lat: ${lat}</h3>`, 'blue');
  }

  createMarker(lngLat: { lng: number, lat: number }, popupHtmlContent: string, color: string): void {
    if (!this.map) return

    const marker = new Marker({
      color: color,
      draggable: true
    })
      .setLngLat(lngLat)
      .setPopup(
        new Popup({ offset: 25 }) // add popups
          .setHTML(
            popupHtmlContent
          )
      )
      .addTo(this.map);

    this.markers.push(marker);
  }

}

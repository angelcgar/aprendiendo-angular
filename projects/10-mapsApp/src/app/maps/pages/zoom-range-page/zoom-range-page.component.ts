import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css',
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map')
  public divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-74.5, 40);

  ngAfterViewInit(): void {
    console.log(this.divMap);

    if (!this.divMap) throw new Error('Elemento html no esncotrado');

    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat,
      zoom: this.zoom, // starting zoom
    });

    this.mapListener();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListener(): void {
    if (!this.map) throw 'Mapa no inicializado';

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (ev) => {
      if (this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    });

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();
    });
  }

  ZoomIn() {
    this.map?.zoomIn();
  }

  ZoomOut() {
    this.map?.zoomOut();
  }

  zoomChange(value: string) {
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }
}

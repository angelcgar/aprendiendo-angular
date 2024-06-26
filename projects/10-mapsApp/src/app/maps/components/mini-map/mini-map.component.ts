import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css',
})
export class MiniMapComponent implements AfterViewInit {
  @Input()
  public lngLat?: [number, number];

  @ViewChild('map')
  public divmap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divmap?.nativeElement) throw 'Map Div not found';
    if (!this.lngLat) throw "Lng can't be null";

    // *map
    const map = new Map({
      container: this.divmap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false,
    });
    // *marker

    new Marker().setLngLat(this.lngLat).addTo(map);
  }
}

import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
// #region TIPOSCountry
import { Country } from '../../interfaces/country';
import { opRegion } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent implements OnInit {
  public region: Country[] = [];
  public opRegions: opRegion[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: opRegion;

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.region = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: opRegion): void {
    this.selectedRegion = region;
    this.countriesService.searchByRegion(region).subscribe((country) => {
      this.region = country;
    });
  }
}

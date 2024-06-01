import { Country } from './country';
import { opRegion } from './region.type';

export interface CacheStore {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCountries;
}

export interface TermCountries {
  term: string;
  countries: Country[];
}

export interface RegionCountries {
  region?: opRegion;
  countries: Country[];
}

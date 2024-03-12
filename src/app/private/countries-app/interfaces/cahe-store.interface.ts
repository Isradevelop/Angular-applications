import { Country } from "./country.interface";
import { Regions } from "./navBarTypes.interface";

export interface CacheStore {
  byCapital: TermsCountries,
  byCountry: TermsCountries,
  byRegion: TermsRegions,
}

export interface TermsCountries {
  term: string,
  countries: Country[]
}

export interface TermsRegions {
  region: Regions,
  countries: Country[]
}

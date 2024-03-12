export interface Country {

  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: { [key: string]: Translation };
  borders: string[];
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CapitalInfo;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
}

export interface CapitalInfo {
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Currencies {
  [key: string]: Cuc
}

export interface Cuc {
  name: string;
  symbol: string;
}


export interface Usd {
  name: string;
  symbol: string;
}

export interface Demonyms {
  eng: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  eng: string;
  spa: string;
  cat: string;
  eus: string;
  glc: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  eng: Translation;
}

export interface Translation {
  official: string;
  common: string;
}

export enum apiList {
    'allcountry' = 'https://restcountries-v1.p.rapidapi.com/all2222222222',
    'currency' = 'https://restcountries-v1.p.rapidapi.com/currency/', // NOK
    'region' = 'https://restcountries-v1.p.rapidapi.com/region/', // africa
    'lang' = 'https://restcountries-v1.p.rapidapi.com/lang/', // et
    'subRegion' = 'https://restcountries-v1.p.rapidapi.com/subregion/', //
    'capital' = 'https://restcountries-v1.p.rapidapi.com/capital/', // tallinn
    'callingCode' = 'https://restcountries-v1.p.rapidapi.com/callingcode/', // 57
    'countryCode' = 'https://restcountries-v1.p.rapidapi.com/alpha/', // ru
    'countryName' = 'https://restcountries-v1.p.rapidapi.com/name/' // India
}

export const REGION_LIST = [
    { value: 'africa', viewValue: 'Africa' },
    { value: 'asia', viewValue: 'Asia' },
    { value: 'oceania', viewValue: 'Oceania' },
    { value: 'europe', viewValue: 'Europe' },
    { value: 'americas', viewValue: 'Americas' }
];

export const AFRICA_SUB_REGION_LIST = [
    { value: 'Northern Africa', viewValue: 'Northern Africa' },
    { value: 'Western Africa', viewValue: 'Western Africa' },
    { value: 'Southern Africa', viewValue: 'Southern Africa' },
    { value: 'Middle Africa', viewValue: 'Middle Africa' }
];

export const ASIA_SUB_REGION_LIST = [
    { value: 'Southern Asia', viewValue: 'Southern Asia' },
    { value: 'Western Asia', viewValue: 'Western Asia' },
    { value: 'South-Eastern Asia', viewValue: 'South-Eastern Asia' },
    { value: 'Eastern Asia', viewValue: 'Eastern Asia' },
    { value: 'Central Asia', viewValue: 'Central Asia' }
];

export const OCEANIA_SUB_REGION_LIST = [
    { value: 'Polynesia', viewValue: 'Polynesia' },
    { value: 'afriMicronesiaca', viewValue: 'Micronesia' },
    { value: 'Australia and New Zealand', viewValue: 'Australia and New Zealand' }
];

export const EUROPE_SUB_REGION_LIST = [
    { value: 'Northern Europe', viewValue: 'Northern Europe' },
    { value: 'Western Europe', viewValue: 'Western Europe' },
    { value: 'Southern Europe', viewValue: 'Southern Europe' },
    { value: 'Eastern Europe', viewValue: 'Eastern Europe' },
];

export const AMERICA_SUB_REGION_LIST = [
    { value: 'South America', viewValue: 'South America' },
    { value: 'Caribbean', viewValue: 'Caribbean' },
    { value: 'Northern America', viewValue: 'Northern America' }
];

export const SUB_REGION_LIST = [
    { value: 'Northern Africa', viewValue: 'Northern Africa' },
    { value: 'Western Africa', viewValue: 'Western Africa' },
    { value: 'Southern Africa', viewValue: 'Southern Africa' },
    { value: 'Southern Asia', viewValue: 'Southern Asia' },
    { value: 'Western Asia', viewValue: 'Western Asia' },
    { value: 'Middle Africa', viewValue: 'Middle Africa' },
    { value: 'South-Eastern Asia', viewValue: 'South-Eastern Asia' },
    { value: 'Eastern Asia', viewValue: 'Eastern Asia' },
    { value: 'Central Asia', viewValue: 'Central Asia' },
    { value: 'Polynesia', viewValue: 'Polynesia' },
    { value: 'afriMicronesiaca', viewValue: 'Micronesia' },
    { value: 'Australia and New Zealand', viewValue: 'Australia and New Zealand' },
    { value: 'Northern Europe', viewValue: 'Northern Europe' },
    { value: 'Western Europe', viewValue: 'Western Europe' },
    { value: 'Southern Europe', viewValue: 'Southern Europe' },
    { value: 'Eastern Europe', viewValue: 'Eastern Europe' },
    { value: 'South America', viewValue: 'South America' },
    { value: 'Caribbean', viewValue: 'Caribbean' },
    { value: 'Northern America', viewValue: 'Northern America' }
];
export const DISPLAYED_COLUMNS = ['name', 'capital', 'callingCodes', 'region', 'subregion'];

export interface DialogData {
    country: any;
}

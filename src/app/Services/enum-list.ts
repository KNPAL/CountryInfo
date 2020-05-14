export enum apiList {
    'allcountry' = 'https://restcountries-v1.p.rapidapi.com/all',
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

export const DISPLAYED_COLUMNS = ['name', 'capital', 'callingCodes', 'region'];

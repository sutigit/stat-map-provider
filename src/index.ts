import finland_municipalities from './maps/finland/municipalities/finland_municipalities_4500k.json';
import finland_provinces from './maps/finland/provinces/finland_provinces.json';

export enum Country {
  FINLAND = 'FINLAND'
}

export enum AdministrativeLevel {
  MUNICIPALITY = 'MUNICIPALITY',
  PROVINCE = 'PROVINCE'
}

export default class StatMap {
  private map: any;

  constructor(country: Country, level: AdministrativeLevel) {
    this.map = this.create(country, level);
    return this.map;
  }

  private create(country: Country, level: AdministrativeLevel) {
    switch (country) {
      case Country.FINLAND:
        switch (level) {
          case AdministrativeLevel.MUNICIPALITY:
            return finland_municipalities;
          case AdministrativeLevel.PROVINCE:
            return finland_provinces;
          default:
            throw new Error('Invalid administrative level');
        }
      default:
        throw new Error('Invalid country');
    }
  }
}

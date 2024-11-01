import finland_municipalities from './maps/finland/municipalities/finland_municipalities.json';
import finland_provinces from './maps/finland/provinces/finland_provinces.json';

export enum Country {
  FINLAND = 'FINLAND'
}

export enum AdministrativeLevel {
  MUNICIPALITY = 'MUNICIPALITY',
  PROVINCE = 'PROVINCE'
}

export default class StatMap {
  maps: {
    finland_municipalities: any;
    finland_provinces: any;
  };

  constructor() {
    this.maps = {
      finland_municipalities,
      finland_provinces
    };
  }

  get(country: Country, level: AdministrativeLevel) {
    switch (country) {
      case Country.FINLAND:
        switch (level) {
          case AdministrativeLevel.MUNICIPALITY:
            return this.maps.finland_municipalities;
          case AdministrativeLevel.PROVINCE:
            return this.maps.finland_provinces;
          default:
            throw new Error('Invalid administrative level');
        }
      default:
        throw new Error('Invalid country');
    }
  }
}

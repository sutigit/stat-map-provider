import finland_municipalities_1000k from './maps/finland/municipalities/finland_municipalities_1000k.json';
import finland_municipalities_4500k from './maps/finland/municipalities/finland_municipalities_4500k.json';

import finland_provinces from './maps/finland/provinces/finland_provinces.json';

export enum Country {
  FINLAND = 'FINLAND'
}

export enum AdministrativeLevel {
  MUNICIPALITY = 'MUNICIPALITY',
  PROVINCE = 'PROVINCE'
}

export enum ResolutionLevel {
  LEVEL_1 = 1,
  LEVEL_2 = 2,
}

export default class StatMap {
  private map: any;

  constructor(country: Country, level: AdministrativeLevel, resolution: ResolutionLevel) {
    this.map = this.create(country, level, resolution);
    return this.map;
  }

  private create(country: Country, level: AdministrativeLevel, resolution: ResolutionLevel) {
    switch (country) {
      case Country.FINLAND:
        switch (level) {
          case AdministrativeLevel.MUNICIPALITY:
            switch (resolution) {
              case ResolutionLevel.LEVEL_1:
                return finland_municipalities_4500k;
              case ResolutionLevel.LEVEL_2:
                return finland_municipalities_1000k;
              default:
                throw new Error('Invalid resolution level');
            }
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

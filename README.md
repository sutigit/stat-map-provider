# stat-map-provider

### Installation
```
npm install https://github.com/sutigit/stat-map-provider.git
```

### Usage
```
import StatMap, { Country, AdministrativeLevel, ResolutionLevel } from 'stat-map-provider';

const mapjson = new StatMap(Country.FINLAND, AdministrativeLevel.MUNICIPALITY, ResolutionLevel.LEVEL_1);
```


## Attributions

### Finland
- GIS Data: Utilizes GIS data from [Maanmittauslaitos](https://www.maanmittauslaitos.fi/), the National Land Survey of Finland.
- Licensing: maps from [Maanmittauslaitos](https://www.maanmittauslaitos.fi/) uses Creative Commons Attribution 4.0 International [(CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.en).

- Attribution Requirement: When using or distributing these maps, please provide appropriate credit to Maanmittauslaitos. An example of proper attribution is: "Map data © Maanmittauslaitos under CC BY 4.0."



---

*This README was generated by me [Sutigit](https://github.com/sutigit) with help of [ChatGPT](https://chatgpt.com/)*
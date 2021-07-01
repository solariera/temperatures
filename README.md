# Temperature convert functions

[![npm](https://img.shields.io/npm/v/@solariera/temperatures)](https://www.npmjs.com/package/@solariera/temperatures)
[![npm](https://img.shields.io/npm/dw/@solariera/temperatures)](https://www.npmjs.com/package/@solariera/temperatures)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@solariera/temperatures)](https://bundlephobia.com/result?p=@solariera/temperatures)

## 1. Usage

### 1-1. Installation

```console
# npm
npm install @solariera/temperatures
```

```console
# yarn
yarn add @solariera/temperatures
```

### 1-2. Basic Usage

```typescript
import { kelvinToCelsius } from '@solariera/temperatures';

const celsius = kelvinToCelsius(0);
console.log(celsius); // -273.15
```

## 2. Specifications

### 2-1. Correspondence table

| input \ output  | Kelvin | Celsius | Fahrenheit | Rankine | Delisle | Newton | Reaumur | Roemer |
| --------------- | :----: | :-----: | :--------: | :-----: | :-----: | :----: | :-----: | :----: |
| Kelvin [K]      |   -    |   ⭕️   |    ⭕️     |   ⭕️   |   ⭕️   |  ⭕️   |   ⭕️   |  ⭕️   |
| Celsius [°C]    |  ⭕️   |    -    |    ⭕️     |         |         |        |         |        |
| Fahrenheit [°F] |  ⭕️   |   ⭕️   |     -      |         |         |        |         |        |
| Rankine [°R]    |  ⭕️   |         |            |    -    |         |        |         |        |
| Delisle [°De]   |  ⭕️   |         |            |         |    -    |        |         |        |
| Newton [°N]     |  ⭕️   |         |            |         |         |   -    |         |        |
| Reaumur [°Ré]   |  ⭕️   |         |            |         |         |        |    -    |        |
| Roemer [°Rø]    |  ⭕️   |         |            |         |         |        |         |   -    |

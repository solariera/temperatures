import { tests, TestData } from '@solariera/easy-jest/lib';
import { kelvinToCelsius as fn } from '../kelvin-celsius';

const data: TestData<typeof fn>[] = [
  { id: '0 [K] ➡︎ 摂氏 (Celsius)', params: [0], ret: -273.15 },
  { id: '1 [K] ➡︎ 摂氏 (Celsius)', params: [1], ret: -272.15 },
  { id: '10 [K] ➡︎ 摂氏 (Celsius)', params: [10], ret: -263.15 },
  { id: '100 [K] ➡︎ 摂氏 (Celsius)', params: [100], ret: -173.14999999999998 },
  { id: '1000 [K] ➡︎ 摂氏 (Celsius)', params: [1000], ret: 726.85 },
];

tests(fn, data);

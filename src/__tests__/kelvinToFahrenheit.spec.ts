import { tests, TestData } from '@solariera/easy-jest/lib';
import { kelvinToFahrenheit as fn } from '../kelvin-fahrenheit';

const data: TestData<typeof fn>[] = [
  { id: '0 [K] ➡︎ 華氏 (Fahrenheit)', params: [0], ret: -459.66999999999996 },
  { id: '1 [K] ➡︎ 華氏 (Fahrenheit)', params: [1], ret: -457.86999999999995 },
  { id: '10 [K] ➡︎ 華氏 (Fahrenheit)', params: [10], ret: -441.66999999999996 },
  { id: '100 [K] ➡︎ 華氏 (Fahrenheit)', params: [100], ret: -279.66999999999996 },
  { id: '1000 [K] ➡︎ 華氏 (Fahrenheit)', params: [1000], ret: 1340.3300000000002 },
];

tests(fn, data);

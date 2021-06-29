import { tests, TestData } from '@solariera/easy-jest/lib';
import { celsiusToFahrenheit as fn } from '../celsius-fahrenheit';

const data: TestData<typeof fn>[] = [
  { id: '0 [°C] ➡︎ 華氏 (Fahrenheit)', params: [0], ret: 32 },
  { id: '1 [°C] ➡︎ 華氏 (Fahrenheit)', params: [1], ret: 33.8 },
  { id: '10 [°C] ➡︎ 華氏 (Fahrenheit)', params: [10], ret: 50 },
  { id: '100 [°C] ➡︎ 華氏 (Fahrenheit)', params: [100], ret: 212 },
  { id: '1000 [°C] ➡︎ 華氏 (Fahrenheit)', params: [1000], ret: 1832.0000000000002 },
];

tests(fn, data);

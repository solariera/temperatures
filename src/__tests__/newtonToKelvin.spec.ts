import { tests, TestData } from '@solariera/easy-jest/lib';
import { newtonToKelvin as fn } from '../newton-kelvin';

const data: TestData<typeof fn>[] = [
  { id: '0 [ºN] ➡︎ ケルビン (Kelvin)', params: [0], ret: 273.15 },
  { id: '1 [ºN] ➡︎ ケルビン (Kelvin)', params: [1], ret: 273.47999999999996 },
  { id: '10 [ºN] ➡︎ ケルビン (Kelvin)', params: [10], ret: 276.45 },
  { id: '100 [ºN] ➡︎ ケルビン (Kelvin)', params: [100], ret: 306.15 },
  { id: '1000 [ºN] ➡︎ ケルビン (Kelvin)', params: [1000], ret: 603.15 },
];

tests(fn, data);

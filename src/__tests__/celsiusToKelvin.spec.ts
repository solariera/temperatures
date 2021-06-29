import { tests, TestData } from '@solariera/easy-jest/lib';
import { celsiusToKelvin as fn } from '../celsius-kelvin';

const data: TestData<typeof fn>[] = [
  { id: '0 [℃] ➡︎ ケルビン (Kelvin)', params: [0], ret: 273.15 },
  { id: '1 [℃] ➡︎ ケルビン (Kelvin)', params: [1], ret: 274.15 },
  { id: '10 [℃] ➡︎ ケルビン (Kelvin)', params: [10], ret: 283.15 },
  { id: '100 [℃] ➡︎ ケルビン (Kelvin)', params: [100], ret: 373.15 },
  { id: '1000 [℃] ➡︎ ケルビン (Kelvin)', params: [1000], ret: 1273.15 },
];

tests(fn, data);

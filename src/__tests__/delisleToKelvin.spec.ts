import { tests, TestData } from '@solariera/easy-jest/lib';
import { delisleToKelvin as fn } from '../delisle-kelvin';

const data: TestData<typeof fn>[] = [
  { id: '0 [°De] ➡︎ ケルビン (Kelvin)', params: [0], ret: 248.76666666666665 },
  { id: '1 [°De] ➡︎ ケルビン (Kelvin)', params: [1], ret: 248.09999999999997 },
  { id: '10 [°De] ➡︎ ケルビン (Kelvin)', params: [10], ret: 242.09999999999997 },
  { id: '100 [°De] ➡︎ ケルビン (Kelvin)', params: [100], ret: 182.09999999999997 },
  { id: '1000 [°De] ➡︎ ケルビン (Kelvin)', params: [1000], ret: -417.9 },
];

tests(fn, data);

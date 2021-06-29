import { tests, TestData } from '@solariera/easy-jest/lib';
import { reaumurTokelvin as fn } from '../reaumur-kelvin';

const data: TestData<typeof fn>[] = [
  { id: '0 [°Ré] ➡︎ ケルビン (Kelvin)', params: [0], ret: 273.15 },
  { id: '1 [°Ré] ➡︎ ケルビン (Kelvin)', params: [1], ret: 273.95 },
  { id: '10 [°Ré] ➡︎ ケルビン (Kelvin)', params: [10], ret: 281.15 },
  { id: '100 [°Ré] ➡︎ ケルビン (Kelvin)', params: [100], ret: 353.15 },
  { id: '1000 [°Ré] ➡︎ ケルビン (Kelvin)', params: [1000], ret: 1073.15 },
];

tests(fn, data);

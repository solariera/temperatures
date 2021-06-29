import { tests, TestData } from '@solariera/easy-jest/lib';
import { roemerToKelvin as fn } from '../roemer-kelvin';

const data: TestData<typeof fn>[] = [
  { id: '0 [°Rø] ➡︎ ケルビン (Kelvin)', params: [0], ret: 258.8642857142857 },
  { id: '1 [°Rø] ➡︎ ケルビン (Kelvin)', params: [1], ret: 260.76904761904757 },
  { id: '10 [°Rø] ➡︎ ケルビン (Kelvin)', params: [10], ret: 277.91190476190474 },
  { id: '100 [°Rø] ➡︎ ケルビン (Kelvin)', params: [100], ret: 449.3404761904761 },
  { id: '1000 [°Rø] ➡︎ ケルビン (Kelvin)', params: [1000], ret: 2163.6261904761905 },
];

tests(fn, data);

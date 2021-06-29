import { tests, TestData } from '@solariera/easy-jest/lib';
import { fahrenheitToKelvin as fn } from '../fahrenheit-kelvin';

const data: TestData<typeof fn>[] = [
  { id: '0 [℉] ➡︎ ケルビン (Kelvin)', params: [0], ret: 255.3722222222222 },
  { id: '1 [℉] ➡︎ ケルビン (Kelvin)', params: [1], ret: 255.92777777777775 },
  { id: '10 [℉] ➡︎ ケルビン (Kelvin)', params: [10], ret: 260.92777777777775 },
  { id: '100 [℉] ➡︎ ケルビン (Kelvin)', params: [100], ret: 310.92777777777775 },
  { id: '1000 [℉] ➡︎ ケルビン (Kelvin)', params: [1000], ret: 810.9277777777777 },
];

tests(fn, data);

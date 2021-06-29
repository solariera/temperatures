import { tests, TestData } from '@solariera/easy-jest/lib';
import { fahrenheitToCelsius as fn } from '../fahrenheit-celsius';

const data: TestData<typeof fn>[] = [
  { id: '0 [°F] ➡︎ 摂氏 (Celsius)', params: [0], ret: -17.77777777777777 },
  { id: '1 [°F] ➡︎ 摂氏 (Celsius)', params: [1], ret: -17.22222222222223 },
  { id: '10 [°F] ➡︎ 摂氏 (Celsius)', params: [10], ret: -12.222222222222229 },
  { id: '100 [°F] ➡︎ 摂氏 (Celsius)', params: [100], ret: 37.77777777777777 },
  { id: '1000 [°F] ➡︎ 摂氏 (Celsius)', params: [100], ret: 37.77777777777777 },
];

tests(fn, data);

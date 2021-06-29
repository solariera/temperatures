import { tests, TestData } from '@solariera/easy-jest/lib';
import { kelvinToNewton as fn } from '../kelvin-newton';

const data: TestData<typeof fn>[] = [
  { id: '0 [K] ➡︎ ニュートン度 (Newton)', params: [0], ret: -90.1395 },
  { id: '1 [K] ➡︎ ニュートン度 (Newton)', params: [1], ret: -89.8095 },
  { id: '10 [K] ➡︎ ニュートン度 (Newton)', params: [10], ret: -86.8395 },
  { id: '100 [K] ➡︎ ニュートン度 (Newton)', params: [100], ret: -57.1395 },
  { id: '1000 [K] ➡︎ ニュートン度 (Newton)', params: [1000], ret: 239.86050000000003 },
];

tests(fn, data);

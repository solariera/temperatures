import { tests, TestData } from '@solariera/easy-jest/lib';
import { kelvinToReaumur as fn } from '../kelvin-reaumur';

const data: TestData<typeof fn>[] = [
  { id: '0 [K] ➡︎ レオミュール度 (Reaumur)', params: [0], ret: -218.51999999999998 },
  { id: '1 [K] ➡︎ レオミュール度 (Reaumur)', params: [1], ret: -217.72 },
  { id: '10 [K] ➡︎ レオミュール度 (Reaumur)', params: [10], ret: -210.51999999999998 },
  { id: '100 [K] ➡︎ レオミュール度 (Reaumur)', params: [100], ret: -138.51999999999998 },
  { id: '1000 [K] ➡︎ レオミュール度 (Reaumur)', params: [1000], ret: 581.48 },
];

tests(fn, data);

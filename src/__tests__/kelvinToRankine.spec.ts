import { tests, TestData } from '@solariera/easy-jest/lib';
import { kelvinToRankine as fn } from '../kelvin-rankine';

const data: TestData<typeof fn>[] = [
  { id: '0 [K] ➡︎ ランキン度 (Rankine)', params: [0], ret: 0 },
  { id: '1 [K] ➡︎ ランキン度 (Rankine)', params: [1], ret: 1.8 },
  { id: '10 [K] ➡︎ ランキン度 (Rankine)', params: [10], ret: 18 },
  { id: '100 [K] ➡︎ ランキン度 (Rankine)', params: [100], ret: 180 },
  { id: '1000 [K] ➡︎ ランキン度 (Rankine)', params: [1000], ret: 1800 },
];

tests(fn, data);

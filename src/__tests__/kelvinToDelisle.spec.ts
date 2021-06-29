import { tests, TestData } from '@solariera/easy-jest/lib';
import { kelvinToDelisle as fn } from '../kelvin-delisle';

const data: TestData<typeof fn>[] = [
  { id: '0 [K] ➡︎ ドリール度 (Delisle)', params: [0], ret: 559.7249999999999 },
  { id: '1 [K] ➡︎ ドリール度 (Delisle)', params: [1], ret: 558.2249999999999 },
  { id: '10 [K] ➡︎ ドリール度 (Delisle)', params: [10], ret: 544.7249999999999 },
  { id: '100 [K] ➡︎ ドリール度 (Delisle)', params: [100], ret: 409.72499999999997 },
  { id: '1000 [K] ➡︎ ドリール度 (Delisle)', params: [1000], ret: -940.2750000000001 },
];

tests(fn, data);

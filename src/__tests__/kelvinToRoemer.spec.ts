import { tests, TestData } from '@solariera/easy-jest/lib';
import { kelvinToRoemer as fn } from '../kelvin-roemer';

const data: TestData<typeof fn>[] = [
  { id: '0 [K] ➡︎ レーマー度 (Roemer)', params: [0], ret: -135.90375 },
  { id: '1 [K] ➡︎ レーマー度 (Roemer)', params: [1], ret: -135.37875 },
  { id: '10 [K] ➡︎ レーマー度 (Roemer)', params: [10], ret: -130.65375 },
  { id: '100 [K] ➡︎ レーマー度 (Roemer)', params: [100], ret: -83.40374999999999 },
  { id: '1000 [K] ➡︎ レーマー度 (Roemer)', params: [1000], ret: 389.09625000000005 },
];

tests(fn, data);

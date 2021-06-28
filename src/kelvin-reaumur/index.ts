import { absoluteTemperature } from '../types/unit';

/**
 * 係数
 */
const coefficient: number = 4 / 5;

/**
 * kelvinToReaumur
 * ケルビンをレミオミュール度に変換する。
 * ([K] - 273.15) * 4⁄5
 * @param {number} kelvin 変換するケルビン
 * @returns {number} 換算されたレミオミュール度
 */
const kelvinToReaumur = (kelvin: number): number => {
  return (kelvin - absoluteTemperature) * coefficient;
};

export { kelvinToReaumur };
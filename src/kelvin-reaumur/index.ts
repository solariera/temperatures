import { absoluteTemperature } from '../types/unit';

/**
 * 係数
 */
const coefficient: number = 4 / 5;

/**
 * kelvinToReaumur
 * ケルビンをレオミュール度に変換する
 * @param {number} kelvin 変換するケルビン
 * @returns {number} 換算されたレオミュール度
 */
const kelvinToReaumur = (kelvin: number): number => {
  return (kelvin - absoluteTemperature) * coefficient;
};

export { kelvinToReaumur };

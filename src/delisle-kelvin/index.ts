import { absoluteTemperature } from '../types/unit';

/**
 * 係数
 */
const coefficient: number = 2 / 3;

/**
 * オフセット
 */
const offset: number = 100;

/**
 * delisleToKelvin
 * ドリール度をケルビンに変換する
 * @param {number} delisle 変換するドリール度
 * @returns {number} 換算されたケルビン
 */
const delisleToKelvin = (delisle: number): number => {
  return (absoluteTemperature + offset - delisle) * coefficient;
};

export { delisleToKelvin };

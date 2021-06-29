import { absoluteTemperature } from '../types/unit';

/**
 * 係数
 */
const coefficient: number = 100 / 33;

/**
 * newtonToKelvin
 * ニュートン度をケルビンに変換する
 * @param {number} newton 変換するニュートン度
 * @returns {number} 換算されたケルビン
 */
const newtonToKelvin = (newton: number): number => {
  return newton / coefficient + absoluteTemperature;
};

export { newtonToKelvin };

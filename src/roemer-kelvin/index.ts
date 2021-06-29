import { absoluteTemperature } from '../types/unit';

/**
 * 係数
 */
const coefficient: number = 40 / 21;

/**
 * オフセット
 */
const offset: number = 7.5;

/**
 * roemerToKelvin
 * レーマー度をケルビンに変換する
 * @param {number} roemer 変換するレーマー度
 * @returns {number} 換算されたケルビン
 */
const roemerToKelvin = (roemer: number): number => {
  return (roemer - offset) * coefficient + absoluteTemperature;
};

export { roemerToKelvin };

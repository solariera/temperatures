import { absoluteTemperature } from '../types/unit';

/**
 * 係数
 */
const coefficient: number = 4 / 5;

/**
 * reaumurTokelvin
 * レオミュール度をケルビンに変換する
 * @param {number} reaumur 変換するレオミュール度
 * @returns {number} 換算されたケルビン
 */
const reaumurTokelvin = (reaumur: number): number => {
  return reaumur * coefficient + absoluteTemperature;
};

export { reaumurTokelvin };

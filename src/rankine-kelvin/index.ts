/**
 * 係数
 */
const coefficient: number = 5 / 9;

/**
 * rankineToKelvin
 * ランキン度をケルビンに変換する
 * @param {number} rankine 変換するランキン度
 * @returns {number} 換算されたケルビン
 */
const rankineToKelvin = (rankine: number): number => {
  return rankine * coefficient;
};

export { rankineToKelvin };

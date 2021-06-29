"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rankineToKelvin = void 0;
/**
 * 係数
 */
const coefficient = 5 / 9;
/**
 * rankineToKelvin
 * ランキン度をケルビンに変換する
 * @param {number} rankine 変換するランキン度
 * @returns {number} 換算されたケルビン
 */
const rankineToKelvin = (rankine) => {
    return rankine * coefficient;
};
exports.rankineToKelvin = rankineToKelvin;

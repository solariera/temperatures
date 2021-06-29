"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roemerToKelvin = void 0;
const unit_1 = require("../types/unit");
/**
 * 係数
 */
const coefficient = 40 / 21;
/**
 * オフセット
 */
const offset = 7.5;
/**
 * roemerToKelvin
 * レーマー度をケルビンに変換する
 * @param {number} roemer 変換するレーマー度
 * @returns {number} 換算されたケルビン
 */
const roemerToKelvin = (roemer) => {
    return (roemer - offset) * coefficient + unit_1.absoluteTemperature;
};
exports.roemerToKelvin = roemerToKelvin;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newtonToKelvin = void 0;
const unit_1 = require("../types/unit");
/**
 * 係数
 */
const coefficient = 100 / 33;
/**
 * newtonToKelvin
 * ニュートン度をケルビンに変換する
 * @param {number} newton 変換するニュートン度
 * @returns {number} 換算されたケルビン
 */
const newtonToKelvin = (newton) => {
    return newton / coefficient + unit_1.absoluteTemperature;
};
exports.newtonToKelvin = newtonToKelvin;

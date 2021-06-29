"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kelvinToNewton = void 0;
const unit_1 = require("../types/unit");
/**
 * 係数
 */
const coefficient = 33 / 100;
/**
 * kelvinToNewton
 * ケルビンをニュートン度に変換する
 * @param {number} kelvin 変換するケルビン
 * @returns {number} 換算されたニュートン度
 */
const kelvinToNewton = (kelvin) => {
    return (kelvin - unit_1.absoluteTemperature) * coefficient;
};
exports.kelvinToNewton = kelvinToNewton;

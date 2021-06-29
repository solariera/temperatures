"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kelvinToReaumur = void 0;
const unit_1 = require("../types/unit");
/**
 * 係数
 */
const coefficient = 4 / 5;
/**
 * kelvinToReaumur
 * ケルビンをレオミュール度に変換する
 * @param {number} kelvin 変換するケルビン
 * @returns {number} 換算されたレオミュール度
 */
const kelvinToReaumur = (kelvin) => {
    return (kelvin - unit_1.absoluteTemperature) * coefficient;
};
exports.kelvinToReaumur = kelvinToReaumur;

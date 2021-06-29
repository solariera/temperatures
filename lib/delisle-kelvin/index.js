"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delisleToKelvin = void 0;
const unit_1 = require("../types/unit");
/**
 * 係数
 */
const coefficient = 2 / 3;
/**
 * オフセット
 */
const offset = 100;
/**
 * delisleToKelvin
 * ドリール度をケルビンに変換する
 * @param {number} delisle 変換するドリール度
 * @returns {number} 換算されたケルビン
 */
const delisleToKelvin = (delisle) => {
    return (unit_1.absoluteTemperature + offset - delisle) * coefficient;
};
exports.delisleToKelvin = delisleToKelvin;

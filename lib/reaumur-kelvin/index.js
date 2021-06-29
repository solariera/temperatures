"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reaumurTokelvin = void 0;
const unit_1 = require("../types/unit");
/**
 * 係数
 */
const coefficient = 4 / 5;
/**
 * reaumurTokelvin
 * レオミュール度をケルビンに変換する
 * @param {number} reaumur 変換するレオミュール度
 * @returns {number} 換算されたケルビン
 */
const reaumurTokelvin = (reaumur) => {
    return reaumur * coefficient + unit_1.absoluteTemperature;
};
exports.reaumurTokelvin = reaumurTokelvin;

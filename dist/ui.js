"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_gradient_1 = __importDefault(require("ink-gradient"));
const ink_big_text_1 = __importDefault(require("ink-big-text"));
const App = () => (react_1.default.createElement(ink_gradient_1.default, { name: 'summer' },
    react_1.default.createElement(ink_big_text_1.default, { text: 'crypto-cli', align: 'center', font: 'chrome' })));
module.exports = App;
exports.default = App;

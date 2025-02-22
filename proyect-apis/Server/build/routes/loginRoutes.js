"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginControllers_1 = __importDefault(require("../controllers/loginControllers"));
const express_1 = require("express");
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', loginControllers_1.default.login);
    }
}
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const histactcontrollers_1 = require("../controllers/histactcontrollers");
class HistActRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:idUsuario', histactcontrollers_1.histActController.list);
    }
}
const histActRoutes = new HistActRoutes();
exports.default = histActRoutes.router;

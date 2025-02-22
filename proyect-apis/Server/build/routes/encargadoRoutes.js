"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const encargadocontrolles_1 = require("../controllers/encargadocontrolles");
class EncargadoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', encargadocontrolles_1.encargadoController.list);
    }
}
const encargadoRoutes = new EncargadoRoutes();
exports.default = encargadoRoutes.router;

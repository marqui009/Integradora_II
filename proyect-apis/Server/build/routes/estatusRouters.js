"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estatusController_1 = require("../controllers/estatusController");
class EstatusRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', estatusController_1.estatusController.list);
    }
}
const estatusRoutes = new EstatusRoutes();
exports.default = estatusRoutes.router;

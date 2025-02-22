"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rolUserController_1 = require("../controllers/rolUserController");
class RolUserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', rolUserController_1.rolUSerController.list);
    }
}
const rolUserRoutes = new RolUserRoutes();
exports.default = rolUserRoutes.router;

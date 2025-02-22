"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioControllers_1 = require("../controllers/usuarioControllers");
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usuarioControllers_1.userController.list);
        this.router.post('/', usuarioControllers_1.userController.create);
        this.router.get('/:id', usuarioControllers_1.userController.getOne);
        this.router.put('/:id', usuarioControllers_1.userController.update);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;

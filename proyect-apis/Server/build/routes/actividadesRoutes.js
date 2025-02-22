"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actividadesControllers_1 = require("../controllers/actividadesControllers");
class ActividadesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:idUsuario', actividadesControllers_1.actividadesController.list);
        this.router.post('/', actividadesControllers_1.actividadesController.create);
        this.router.put('/:id', actividadesControllers_1.actividadesController.update);
        this.router.delete('/:id', actividadesControllers_1.actividadesController.delete);
    }
}
const actividadesRoutes = new ActividadesRoutes();
exports.default = actividadesRoutes.router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const editaractividadController_1 = require("../controllers/editaractividadController");
class EditaractRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', editaractividadController_1.editarActController.getOne);
        this.router.get('/', editaractividadController_1.editarActController.list);
    }
}
const editaractRoutes = new EditaractRoutes();
exports.default = editaractRoutes.router;

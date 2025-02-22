"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ Text: 'API Is /api/actividades' });
    }
}
exports.indexController = new IndexController();

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actividadesController = void 0;
const database_1 = __importDefault(require("../database"));
class ActividadesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var Estatus;
            Estatus = 'CANCELADA';
            const { idUsuario } = req.params;
            const act = yield database_1.default.query('SELECT a.idActividad, a.Nombre_Actividad, a.Descripcion, u_encargado.nombre AS Encargado, u_participante.nombre AS Participante, est.nombreEstatus AS Estatus, a.Fecha_de_inicio, a.Fecha_de_fin, a.Lugar FROM actividades a LEFT JOIN USUARIOS u_encargado ON a.Encargado = u_encargado.idUsuario LEFT JOIN usuarios u_participante ON a.Participante = u_participante.idUsuario JOIN Estatus est ON a.Estatus = est.nombreEstatus WHERE Estatus != ? AND (a.Participante = ? OR a.Encargado = ?)', [Estatus, idUsuario, idUsuario]);
            res.json(act);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO actividades set ? ', [req.body]);
            res.json({ message: 'Atividad Guardada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE actividades set ?  WHERE idActividad = ?', [req.body, id]);
            res.json({ message: 'La actividad se actualizo' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE actividades set Estatus = "CANCELADA" WHERE idActividad = ?', [id]);
            res.json({ message: 'La actividad se eliminó' });
        });
    }
}
exports.actividadesController = new ActividadesController();

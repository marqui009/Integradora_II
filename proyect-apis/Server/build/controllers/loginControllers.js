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
const database_1 = __importDefault(require("../database"));
class LoginController {
    login(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { correo, password1 } = req.body;
            const usuario = yield database_1.default.query('SELECT * FROM usuarios WHERE correo = ? AND contrasena = ?', [correo, password1]);
            if (usuario.length > 0) {
                // Si el usuario existe y las credenciales son correctas
                resp.json(usuario[0]);
            }
            else {
                // Si las credenciales son incorrectas
                resp.status(401).json({ success: false, message: "Correo o contraseña incorrectos" });
            }
        });
    }
}
const loginController = new LoginController();
exports.default = loginController;

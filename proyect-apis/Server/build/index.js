"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const actividadesRoutes_1 = __importDefault(require("./routes/actividadesRoutes"));
const histactRoutes_1 = __importDefault(require("./routes/histactRoutes"));
const encargadoRoutes_1 = __importDefault(require("./routes/encargadoRoutes"));
const participantesRoutes_1 = __importDefault(require("./routes/participantesRoutes"));
const estatusRouters_1 = __importDefault(require("./routes/estatusRouters"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const rolUserRouter_1 = __importDefault(require("./routes/rolUserRouter"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const editaractRouter_1 = __importDefault(require("./routes/editaractRouter"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/actividades', actividadesRoutes_1.default);
        this.app.use('/api/histact', histactRoutes_1.default);
        this.app.use('/api/user', usuarioRoutes_1.default);
        this.app.use('/api/rol', rolUserRouter_1.default);
        this.app.use('/api/add', encargadoRoutes_1.default);
        this.app.use('/api/add2', participantesRoutes_1.default);
        this.app.use('/api/add3', estatusRouters_1.default);
        this.app.use('/api/login', loginRoutes_1.default);
        this.app.use('/api/editact', editaractRouter_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on Port", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();

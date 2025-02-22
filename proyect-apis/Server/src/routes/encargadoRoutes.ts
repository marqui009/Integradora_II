import { Router } from "express";
import { encargadoController } from "../controllers/encargadocontrolles";
class EncargadoRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(){
        this.router.get('/',encargadoController.list);
    }
    
}

const encargadoRoutes = new EncargadoRoutes();
export default encargadoRoutes.router;
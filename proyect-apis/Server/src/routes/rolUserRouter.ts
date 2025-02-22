import { Router } from "express";
import { encargadoController } from "../controllers/encargadocontrolles";
import { rolUSerController } from "../controllers/rolUserController";
class RolUserRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(){
        this.router.get('/',rolUSerController.list);
    }
    
}

const rolUserRoutes = new RolUserRoutes();
export default rolUserRoutes.router;
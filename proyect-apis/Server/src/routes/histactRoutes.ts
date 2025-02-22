import { Router } from "express";
import { histActController } from "../controllers/histactcontrollers";
class HistActRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(){
        this.router.get('/:idUsuario',histActController.list);
    }
    
}

const histActRoutes = new HistActRoutes();
export default histActRoutes.router;
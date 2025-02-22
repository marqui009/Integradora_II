import { Router } from "express";
import { estatusController } from "../controllers/estatusController";
class EstatusRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(){
        this.router.get('/',estatusController.list);
    }
    
}

const estatusRoutes = new EstatusRoutes();
export default estatusRoutes.router;
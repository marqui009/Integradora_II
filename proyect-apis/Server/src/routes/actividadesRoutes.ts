import { Router } from "express";
import { actividadesController } from "../controllers/actividadesControllers";
class ActividadesRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(){
        this.router.get('/:idUsuario',actividadesController.list);
        this.router.post('/',actividadesController.create);
        this.router.put('/:id',actividadesController.update);
        this.router.delete('/:id',actividadesController.delete);
    }
    
}

const actividadesRoutes = new ActividadesRoutes();
export default actividadesRoutes.router;
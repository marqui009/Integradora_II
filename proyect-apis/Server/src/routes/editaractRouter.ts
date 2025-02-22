import { Router } from "express";
import { editarActController } from "../controllers/editaractividadController";
class EditaractRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(){
        this.router.get('/:id',editarActController.getOne);
        this.router.get('/',editarActController.list);
    }
    
}

const editaractRoutes = new EditaractRoutes();
export default editaractRoutes.router;
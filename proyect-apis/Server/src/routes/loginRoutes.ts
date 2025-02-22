import loginController from "../controllers/loginControllers";
import { Router } from "express";

class LoginRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }
    config(): void {

        this.router.post('/', loginController.login);
    }
}

const loginRoutes = new LoginRoutes();
export default loginRoutes.router;
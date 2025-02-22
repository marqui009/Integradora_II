import { Router } from "express";
import { encargadoController } from "../controllers/encargadocontrolles";
import { participandoController } from "../controllers/ParticipantesControlles";
class ParticipanteRotes{

    public router: Router = Router();

    constructor(){
        this.config();
    }
    
    config(){
        this.router.get('/',participandoController.list);

    }
    
}

const participanteRotes = new ParticipanteRotes();
export default participanteRotes.router;
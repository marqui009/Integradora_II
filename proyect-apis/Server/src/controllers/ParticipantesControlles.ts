import {Request, Response} from 'express';
import pool from '../database'
 class ParticipandoController{


    public async  list (req: Request, res: Response): Promise<void>{
      var Estatus:string;
      Estatus = 'PARTICIPANTE';
      const act = await pool.query('SELECT * FROM usuarios WHERE nombreRol = ?',Estatus)
       res.json(act);
    }
    }

 export const participandoController = new ParticipandoController();
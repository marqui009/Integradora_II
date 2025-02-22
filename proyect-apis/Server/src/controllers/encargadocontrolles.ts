import {Request, Response} from 'express';
import pool from '../database'
 class EncargadoController{

    public async  list (req: Request, res: Response): Promise<void>{
      var Estatus:string;
      Estatus = 'ENCARGADO';
      const act = await pool.query('SELECT * FROM usuarios WHERE nombreRol = ?',Estatus)
       res.json(act);
    }
    }
    
 export const encargadoController = new EncargadoController();
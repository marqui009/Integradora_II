import {Request, Response} from 'express';
import pool from '../database'
 class EstatusController{

    public async  list (req: Request, res: Response): Promise<void>{
      var Estatus:string;
      Estatus = 'CANCELADA';
      const act = await pool.query('SELECT * FROM estatus WHERE nombreEstatus != ?',Estatus)
       res.json(act);
    }
    }
    
 export const estatusController = new EstatusController();
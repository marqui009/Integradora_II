import {Request, Response} from 'express';
import pool from '../database'
 class RolUSerController{

    public async  list (req: Request, res: Response): Promise<void>{
      const act = await pool.query('SELECT nombreRol FROM roles')
       res.json(act);
    }
    }
    
 export const rolUSerController = new RolUSerController();
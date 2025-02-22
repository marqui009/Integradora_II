import {Request, Response} from 'express';
import pool from '../database'
 class EditarActController{
  


  public async getOne(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const games = await pool.query('SELECT * FROM actividades WHERE idActividad = ?', [id]);
    console.log(games.length);
    if (games.length > 0) {
        return res.json(games[0]);
    }
    res.status(404).json({ text: "The activity doesn't exits" });
}

    public async  list (req: Request, res: Response): Promise<void>{
      const act = await pool.query('SELECT * FROM actividades ')
        res.json(act);
     }


  }
 
 export const editarActController = new EditarActController();
import {Request, Response} from 'express';
import pool from '../database'

 class UserController{

    public async  list (req: Request, res: Response): Promise<void>{
     const act = await pool.query('SELECT * FROM usuarios ')
       res.json(act);
    }
    public async create(req: Request, res: Response): Promise<void>{
      await pool.query('INSERT INTO usuarios set ? ',[req.body])
      res.json({message:'User Guardada'});
    }

    public async update(req: Request, res: Response): Promise<void>{
      const {id} = req.params;
      await pool.query('UPDATE usuarios set ?  WHERE idUsuario = ?',[req.body,id]);
      res.json({message: 'La actividad se actualizo'});
    }
    public async getOne(req: Request, res: Response): Promise<any> {
      const { id } = req.params;
      const games = await pool.query('SELECT * FROM usuarios WHERE idUsuario = ?', [id]);
      console.log(games.length);
      if (games.length > 0) {
          return res.json(games[0]);
      }
      res.status(404).json({ text: "The game doesn't exits" });
  }
    }
    

 export const userController = new UserController();
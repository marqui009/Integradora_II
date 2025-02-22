import {Request, Response} from 'express';
import pool from '../database'
 class ActividadesController{
  
    public async  list (req: Request, res: Response): Promise<void>{
      var Estatus:string;
      Estatus = 'CANCELADA';
      const { idUsuario } = req.params;
      const act = await pool.query('SELECT a.idActividad, a.Nombre_Actividad, a.Descripcion, u_encargado.nombre AS Encargado, u_participante.nombre AS Participante, est.nombreEstatus AS Estatus, a.Fecha_de_inicio, a.Fecha_de_fin, a.Lugar FROM actividades a LEFT JOIN USUARIOS u_encargado ON a.Encargado = u_encargado.idUsuario LEFT JOIN usuarios u_participante ON a.Participante = u_participante.idUsuario JOIN Estatus est ON a.Estatus = est.nombreEstatus WHERE Estatus != ? AND (a.Participante = ? OR a.Encargado = ?)', [Estatus, idUsuario, idUsuario]);
       res.json(act);
    }
    public async create(req: Request, res: Response): Promise<void>{
      await pool.query('INSERT INTO actividades set ? ',[req.body])
      res.json({message:'Atividad Guardada'});
    }

    public async update(req: Request, res: Response): Promise<void>{
      const {id} = req.params;
      await pool.query('UPDATE actividades set ?  WHERE idActividad = ?',[req.body,id]);
      res.json({message: 'La actividad se actualizo'});
    }
    public async delete(req: Request, res: Response): Promise<void>{
      const { id } = req.params;
      await pool.query('UPDATE actividades set Estatus = "CANCELADA" WHERE idActividad = ?', [id]); 
      res.json({ message: 'La actividad se eliminó' });
    }
  }
 
 export const actividadesController = new ActividadesController();
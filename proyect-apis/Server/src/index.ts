import express,{Application,Request,Response} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import actividadesRoutes from './routes/actividadesRoutes';
import HistActRoutes from './routes/histactRoutes';
import encargadoRoutes from './routes/encargadoRoutes';
import participanteRotes from './routes/participantesRoutes';
import estatusRouters from './routes/estatusRouters';
import usuarioRoutes from './routes/usuarioRoutes';
import rolUserRouter from './routes/rolUserRouter';
import loginRoutes from './routes/loginRoutes';
import editaractRouter from './routes/editaractRouter';
class Server{
    public app : Application

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }


    config():void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    routes():void{
        this.app.use(indexRoutes);
        this.app.use('/api/actividades',actividadesRoutes);
        this.app.use('/api/histact',HistActRoutes);
        this.app.use('/api/user',usuarioRoutes);
        this.app.use('/api/rol',rolUserRouter);
        this.app.use('/api/add',encargadoRoutes);
        this.app.use('/api/add2',participanteRotes);
        this.app.use('/api/add3',estatusRouters);
        this.app.use('/api/login',loginRoutes)
        this.app.use('/api/editact',editaractRouter)
    }
    start():void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log("Server on Port",this.app.get('port'))
        });
    }

}
const server = new Server();
server.start();
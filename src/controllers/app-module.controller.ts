import {Request, Response} from 'express';
import { findAppModule } from '../services/app-module.service';

export const getAppModules = async (req: Request, res: Response)=>{
    try {
        const {usu_cod, system_cod} = req.query;
        
        const usuCod:string = usu_cod?.toString()!;
        const codSubSystem = system_cod?.toString()!;

        const routesList = await findAppModule(usuCod, codSubSystem);
        
        if (!routesList){
            return res.status(404).send({
                message:'No existen rutas'
            });
        }

        return res.status(200).json(routesList)
    } catch (error: any) {
        return res.status(500).json({
            error: error,
            stack: error.stack
        })
    }
};

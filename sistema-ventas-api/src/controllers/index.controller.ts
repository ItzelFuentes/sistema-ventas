import { Request, Response } from 'express';
//import prisma from '../database/database';
import { utils } from '../utils/utils';

class IndexController {

    public async index(req: Request, res: Response){
        try{
            
            return res.json({message: "Api Works!!!"});
            //return res.json(usuarios);
        }catch (error: any){
            return res.status(500).json({message:`Error:${error.message}`});
        }
    }

    public insert(req: Request, res: Response){
        try{
            return res.json({message: "INSERT Works!!!"});
        }catch (error: any){
            return res.status(500).json({message:`Error:${error.message}`});
        }
    }

    public update(req: Request, res: Response){
        try{
            return res.json({message: "UPDATE Works!!!"});
        }catch (error: any){
            return res.status(500).json({message:`Error:${error.message}`});
        }
    }

    public delete(req: Request, res: Response){
        try{
            return res.json({message: "DELETE Works!!!"});
        }catch (error: any){
            return res.status(500).json({message:`Error:${error.message}`});
        }
    }
}
export const indexController = new IndexController();
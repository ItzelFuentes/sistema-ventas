import { Request, Response } from 'express';
import prisma from '../database/database';
import { utils } from '../utils/utils';

class IndexController {

    public async index(req: Request, res: Response){
        try{
            //throw new RangeError('Error inesperado');
            /*const newUser = await prisma.usuario.create({
                data: {
                    nombre:'Alessandra',
                    apellidos:'Fuentes',
                    username:'AFuentes',
                    password:'1234',
                }
            })*/

            const user = {
                cveUsuario : 1,
                nombre: 'Alessandra',
                rol: [1, 2, 3]
            };

            const token = utils.generateJWT(user);
            console.log(token);

            //const usuarios = await prisma.usuario.findMany();

            /*const deletedUser = await prisma.usuario.delete({
                where: { cveUsuario: newUser.cveUsuario }
            })*/

            
            /*var jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdmVVc3VhcmlvIjoxLCJub21icmUiOiJBbGVzc2FuZHJhIiwicm9sIjpbMSwyLDNdLCJpYXQiOjE3MjAyMjgwNzEsImV4cCI6MTcyMDIzMTY3MX0.K9CkGJo-zt8mxcT-zcIouIM5wcFqoZyM81JqKPd8ebg";
            var data = utils.getPayload(jwt);
            console.log(data);
            */

            
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
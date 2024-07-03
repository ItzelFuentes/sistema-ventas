import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const validate = (req: Request, res: Response, next: NextFunction)=> {
    console.log("Init Middleware :: validator.check");
    //SE OBTIENE LOS ERROR A PARTIR DEL REQUEST ORTIGINAL DE LA PETICIÓN 
    const errors = validationResult(req);

    //SI NO EXISTEN LOS ERROES LA PETICION CONTINUA
    if (errors.isEmpty()) return next();

    //SE DEVUELVEN LOS ERRORES CON UN ESTADO DE PETICION 400
    return res.status(400).json(errors.array());

}

import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { utils } from '../utils/utils';

export const jwtCheck = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers["authorization"];
        if (!authHeader) {
            return res.status(401).send("No token provided");
        }

        const token = authHeader.split(' ')[1]; // Asume formato "Bearer token"
        if (!token) {
            return res.status(401).send("Invalid token format");
        }

        // Aquí debes verificar y decodificar el token
        const payload = utils.getPayload(token);

        // Si la validación es correcta, genera un nuevo token
        const newToken = utils.generateJWT(payload);
        res.setHeader("auth", newToken);

        next();
    } catch (error) {
        console.error('JWT Check Error:', error);
        return res.status(401).send("Not Authorized");
    }
};

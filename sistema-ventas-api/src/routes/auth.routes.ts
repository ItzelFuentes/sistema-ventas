import { authRules } from './../rules/auth.rules';
import { Router } from "express";
import { authController } from "../controllers/auth.controller";
import { validate } from '../middlewares/validator.check';


class AuthRoutes {
    public router: Router;

    constructor(){
        this.router = Router();
        this.config();
    }

    /**
     * @swagger
     * definitions:
     *  User:
     *      type: object
     *      properties:
     *          username:
     *              type: string
     *          password:
     *              type: string
     */
    config(){
        /**
         * @swagger
         * /Api/auth:
         *  post:
         *      tags: ["Credenciales"]
         *      summary: Log In
         *      description: Inicio de sesión del usuario
         *      produces: 
         *          - application/json
         *      parameters:
         *          - in: body
         *            name: Credentials
         *            description: Usuario y contraseña del usuario
         *            schema: 
         *              $ref: '#/definitions/User'
         *            required: true
         *      responses:
         *          200: 
         *              description: Exito
         */
        this.router.post('/', authRules(), [validate], authController.iniciarSesion);
    }


}

const authRoutes = new AuthRoutes();
export default authRoutes.router;
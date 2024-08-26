import { Router } from "express";
import { rolController } from "../controllers/rol.controller";
import { rolRules } from "../rules/rol.rules";
import { validate } from '../middlewares/validator.check';

class RolRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    config() {
        this.router.get('/', rolController.getRoles);
        this.router.get('/:id', rolController.getRol);
        this.router.post('/', rolRules(), validate, rolController.createRol);
        this.router.put('/:id', rolRules(), validate, rolController.updateRol);
        this.router.delete('/:id', rolController.deleteRol);
    }
    
}


const rolRoutes = new RolRoutes();
export default rolRoutes.router;

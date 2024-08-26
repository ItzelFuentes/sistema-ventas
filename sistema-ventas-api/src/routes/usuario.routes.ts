import { Router } from 'express';
import { usuarioController } from '../controllers/usuario.controller';
import { usuarioRules } from '../rules/usuario.rules';
import { validate } from '../middlewares/validator.check';

class UsuarioRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    config() {
        this.router.post('/', usuarioRules(), validate, usuarioController.createUsuario);
        this.router.get('/', usuarioController.getUsuarios);
        this.router.get('/:id', usuarioController.getUsuario);
        this.router.put('/:id', usuarioRules(), validate, usuarioController.updateUsuario);
        this.router.delete('/:id', usuarioController.deleteUsuario);
    }
    
}

const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;

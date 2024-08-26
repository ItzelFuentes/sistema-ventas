"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const usuario_rules_1 = require("../rules/usuario.rules");
const validator_check_1 = require("../middlewares/validator.check");
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', (0, usuario_rules_1.usuarioRules)(), validator_check_1.validate, usuario_controller_1.usuarioController.createUsuario);
        this.router.get('/', usuario_controller_1.usuarioController.getUsuarios);
        this.router.get('/:id', usuario_controller_1.usuarioController.getUsuario);
        this.router.put('/:id', (0, usuario_rules_1.usuarioRules)(), validator_check_1.validate, usuario_controller_1.usuarioController.updateUsuario);
        this.router.delete('/:id', usuario_controller_1.usuarioController.deleteUsuario);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;

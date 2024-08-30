"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rol_controller_1 = require("../controllers/rol.controller");
const rol_rules_1 = require("../rules/rol.rules");
const validator_check_1 = require("../middlewares/validator.check");
class RolRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', rol_controller_1.rolController.getRoles);
        this.router.get('/:id', rol_controller_1.rolController.getRol);
        this.router.post('/', (0, rol_rules_1.rolRules)(), validator_check_1.validate, rol_controller_1.rolController.createRol);
        this.router.put('/:id', (0, rol_rules_1.rolRules)(), validator_check_1.validate, rol_controller_1.rolController.updateRol);
        this.router.delete('/:id', rol_controller_1.rolController.deleteRol);
    }
}
const rolRoutes = new RolRoutes();
exports.default = rolRoutes.router;

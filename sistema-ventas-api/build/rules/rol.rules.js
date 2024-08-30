"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolRules = void 0;
const express_validator_1 = require("express-validator");
const rolRules = () => {
    return [
        (0, express_validator_1.body)('descripcion').trim().not().isEmpty().withMessage("Campo requerido")
            .isLength({ min: 3, max: 250 }).withMessage("Rango Incorrecto"),
        (0, express_validator_1.body)('clave').optional().trim().isLength({ max: 45 }).withMessage("Rango Incorrecto"),
        (0, express_validator_1.body)('activo').isBoolean().withMessage("Debe ser un valor booleano")
    ];
};
exports.rolRules = rolRules;

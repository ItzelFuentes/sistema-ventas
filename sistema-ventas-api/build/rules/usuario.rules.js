"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRules = void 0;
const express_validator_1 = require("express-validator");
const usuarioRules = () => {
    return [
        (0, express_validator_1.body)('nombre').notEmpty().withMessage("El nombre es requerido").isLength({ max: 250 }).withMessage("El nombre debe tener máximo 250 caracteres"),
        (0, express_validator_1.body)('apellidos').notEmpty().withMessage("Los apellidos son requeridos").isLength({ max: 600 }).withMessage("Los apellidos deben tener máximo 600 caracteres"),
        (0, express_validator_1.body)('username').notEmpty().withMessage("El nombre de usuario es requerido").isLength({ max: 150 }).withMessage("El nombre de usuario debe tener máximo 150 caracteres"),
        (0, express_validator_1.body)('password').notEmpty().withMessage("La contraseña es requerida").isLength({ max: 800 }).withMessage("La contraseña debe tener máximo 800 caracteres"),
        (0, express_validator_1.body)('cveRol').notEmpty().withMessage("El rol es requerido").isInt().withMessage("El rol debe ser un número entero")
    ];
};
exports.usuarioRules = usuarioRules;

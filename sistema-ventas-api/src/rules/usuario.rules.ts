import { body } from 'express-validator';

export const usuarioRules = () => {
    return [
        body('nombre').notEmpty().withMessage("El nombre es requerido").isLength({ max: 250 }).withMessage("El nombre debe tener máximo 250 caracteres"),
        body('apellidos').notEmpty().withMessage("Los apellidos son requeridos").isLength({ max: 600 }).withMessage("Los apellidos deben tener máximo 600 caracteres"),
        body('username').notEmpty().withMessage("El nombre de usuario es requerido").isLength({ max: 150 }).withMessage("El nombre de usuario debe tener máximo 150 caracteres"),
        body('password').notEmpty().withMessage("La contraseña es requerida").isLength({ max: 800 }).withMessage("La contraseña debe tener máximo 800 caracteres"),
        body('cveRol').notEmpty().withMessage("El rol es requerido").isInt().withMessage("El rol debe ser un número entero")
    ]
}

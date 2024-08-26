import { body } from 'express-validator';

export const rolRules = () => {
    return [
        body('descripcion').trim().not().isEmpty().withMessage("Campo requerido")
            .isLength({ min: 3, max: 250 }).withMessage("Rango Incorrecto"),
        body('clave').optional().trim().isLength({ max: 45 }).withMessage("Rango Incorrecto"),
        body('activo').isBoolean().withMessage("Debe ser un valor booleano")
    ];
}

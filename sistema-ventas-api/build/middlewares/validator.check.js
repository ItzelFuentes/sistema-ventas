"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const express_validator_1 = require("express-validator");
const validate = (req, res, next) => {
    console.log("Init Middleware :: validator.check");
    //SE OBTIENE LOS ERROR A PARTIR DEL REQUEST ORTIGINAL DE LA PETICIÓN 
    const errors = (0, express_validator_1.validationResult)(req);
    //SI NO EXISTEN LOS ERROES LA PETICION CONTINUA
    if (errors.isEmpty())
        return next();
    //SE DEVUELVEN LOS ERRORES CON UN ESTADO DE PETICION 400
    return res.status(400).json(errors.array());
};
exports.validate = validate;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtCheck = void 0;
const utils_1 = require("../utils/utils");
const jwtCheck = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        if (!authHeader) {
            return res.status(401).send("No token provided");
        }
        const token = authHeader.split(' ')[1]; // Asume formato "Bearer token"
        if (!token) {
            return res.status(401).send("Invalid token format");
        }
        // Aquí debes verificar y decodificar el token
        const payload = utils_1.utils.getPayload(token);
        // Si la validación es correcta, genera un nuevo token
        const newToken = utils_1.utils.generateJWT(payload);
        res.setHeader("auth", newToken);
        next();
    }
    catch (error) {
        console.error('JWT Check Error:', error);
        return res.status(401).send("Not Authorized");
    }
};
exports.jwtCheck = jwtCheck;

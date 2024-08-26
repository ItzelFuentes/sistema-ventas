"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioController = void 0;
const database_1 = __importDefault(require("../database/database"));
const utils_1 = require("../utils/utils");
class UsuarioController {
    getUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield database_1.default.usuario.findMany({
                    include: {
                        rol: true,
                    },
                });
                return res.json(usuarios);
            }
            catch (error) {
                return res.status(500).json({ message: "Error retrieving users" });
            }
        });
    }
    getUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const usuario = yield database_1.default.usuario.findUnique({
                    where: { cveUsuario: Number(id) },
                    include: {
                        rol: true, // Include related Rol data
                    },
                });
                if (!usuario) {
                    return res.status(404).json({ message: "User not found" });
                }
                return res.json(usuario);
            }
            catch (error) {
                return res.status(500).json({ message: "Error retrieving user" });
            }
        });
    }
    createUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nombre, apellidos, username, password, cveRol } = req.body;
                const hashedPassword = (yield utils_1.utils.hashPassword(password)).toString();
                const newUsuario = yield database_1.default.usuario.create({
                    data: {
                        nombre,
                        apellidos,
                        username,
                        password: hashedPassword,
                        cveRol
                    }
                });
                return res.status(201).json(newUsuario);
            }
            catch (error) {
                return res.status(500).json({ message: "Error creating user" });
            }
        });
    }
    deleteUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.usuario.delete({
                    where: { cveUsuario: Number(id) }
                });
                return res.status(204).send(); // No content response for successful deletion
            }
            catch (error) {
                return res.status(500).json({ message: "Error deleting user" });
            }
        });
    }
    updateUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { nombre, apellidos, username, password, cveRol } = req.body;
                // Check if user exists
                const usuarioExists = yield database_1.default.usuario.findUnique({
                    where: { cveUsuario: Number(id) }
                });
                if (!usuarioExists) {
                    return res.status(404).json({ message: "User not found" });
                }
                // Update the user
                const updatedUsuario = yield database_1.default.usuario.update({
                    where: { cveUsuario: Number(id) },
                    data: {
                        nombre,
                        apellidos,
                        username,
                        password,
                        cveRol
                    }
                });
                return res.json(updatedUsuario);
            }
            catch (error) {
                return res.status(500).json({ message: "Error updating user" });
            }
        });
    }
}
exports.usuarioController = new UsuarioController();

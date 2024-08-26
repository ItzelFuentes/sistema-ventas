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
exports.rolController = void 0;
const database_1 = __importDefault(require("../database/database"));
class RolController {
    getRoles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const roles = yield database_1.default.rol.findMany();
                return res.json(roles);
            }
            catch (error) {
                return res.status(500).json({ message: "Error retrieving roles" });
            }
        });
    }
    getRol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const rol = yield database_1.default.rol.findUnique({
                    where: { cveRol: Number(id) }
                });
                if (!rol) {
                    return res.status(404).json({ message: "Role not found" });
                }
                return res.json(rol);
            }
            catch (error) {
                return res.status(500).json({ message: "Error retrieving role" });
            }
        });
    }
    createRol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { descripcion, clave, activo } = req.body;
                const newRol = yield database_1.default.rol.create({
                    data: {
                        descripcion,
                        clave,
                        activo
                    }
                });
                return res.status(201).json(newRol);
            }
            catch (error) {
                return res.status(500).json({ message: "Error creating role" });
            }
        });
    }
    updateRol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { descripcion, clave, activo } = req.body;
                const updatedRol = yield database_1.default.rol.update({
                    where: { cveRol: Number(id) },
                    data: {
                        descripcion,
                        clave,
                        activo
                    }
                });
                return res.json(updatedRol);
            }
            catch (error) {
                return res.status(500).json({ message: "Error updating role" });
            }
        });
    }
    deleteRol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.rol.delete({
                    where: { cveRol: Number(id) }
                });
                return res.status(204).send();
            }
            catch (error) {
                return res.status(500).json({ message: "Error deleting role" });
            }
        });
    }
}
exports.rolController = new RolController();

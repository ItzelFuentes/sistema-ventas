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
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
const utils_1 = require("../utils/utils");
class IndexController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //throw new RangeError('Error inesperado');
                /*const newUser = await prisma.usuario.create({
                    data: {
                        nombre:'Alessandra',
                        apellidos:'Fuentes',
                        username:'AFuentes',
                        password:'1234',
                    }
                })*/
                const user = {
                    cveUsuario: 1,
                    nombre: 'Alessandra',
                    rol: [1, 2, 3]
                };
                const token = utils_1.utils.generateJWT(user);
                console.log(token);
                //const usuarios = await prisma.usuario.findMany();
                /*const deletedUser = await prisma.usuario.delete({
                    where: { cveUsuario: newUser.cveUsuario }
                })*/
                /*var jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdmVVc3VhcmlvIjoxLCJub21icmUiOiJBbGVzc2FuZHJhIiwicm9sIjpbMSwyLDNdLCJpYXQiOjE3MjAyMjgwNzEsImV4cCI6MTcyMDIzMTY3MX0.K9CkGJo-zt8mxcT-zcIouIM5wcFqoZyM81JqKPd8ebg";
                var data = utils.getPayload(jwt);
                console.log(data);
                */
                return res.json({ message: "Api Works!!!" });
                //return res.json(usuarios);
            }
            catch (error) {
                return res.status(500).json({ message: `Error:${error.message}` });
            }
        });
    }
    insert(req, res) {
        try {
            return res.json({ message: "INSERT Works!!!" });
        }
        catch (error) {
            return res.status(500).json({ message: `Error:${error.message}` });
        }
    }
    update(req, res) {
        try {
            return res.json({ message: "UPDATE Works!!!" });
        }
        catch (error) {
            return res.status(500).json({ message: `Error:${error.message}` });
        }
    }
    delete(req, res) {
        try {
            return res.json({ message: "DELETE Works!!!" });
        }
        catch (error) {
            return res.status(500).json({ message: `Error:${error.message}` });
        }
    }
}
exports.indexController = new IndexController();

import { Request, Response } from "express";
import prisma from "../database/database";
import { utils } from "../utils/utils";

class UsuarioController {

    public async getUsuarios(req: Request, res: Response): Promise<Response> {
        try {
            const usuarios = await prisma.usuario.findMany({
                include: {
                    rol: true,  
                },
            });
            return res.json(usuarios);
        } catch (error: any) {
            return res.status(500).json({ message: "Error retrieving users" });
        }
    }

    public async getUsuario(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const usuario = await prisma.usuario.findUnique({
                where: { cveUsuario: Number(id) },
                include: {
                    rol: true,  // Include related Rol data
                },
            });
            if (!usuario) {
                return res.status(404).json({ message: "User not found" });
            }
            return res.json(usuario);
        } catch (error: any) {
            return res.status(500).json({ message: "Error retrieving user" });
        }
    }

    public async createUsuario(req: Request, res: Response): Promise<Response> {
        try {
            const { nombre, apellidos, username, password, cveRol } = req.body;
            const hashedPassword: string = (await utils.hashPassword(password)).toString();
            const newUsuario = await prisma.usuario.create({
                data: {
                    nombre,
                    apellidos,
                    username,
                    password:hashedPassword,
                    cveRol
                }
            });
            return res.status(201).json(newUsuario);
        } catch (error: any) {
            return res.status(500).json({ message: "Error al crear el usuario" });
        }
    }

    public async deleteUsuario(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            await prisma.usuario.delete({
                where: { cveUsuario: Number(id) }
            });
            return res.status(204).send();  
        } catch (error: any) {
            return res.status(500).json({ message: "Error al eliminar el usuario" });
        }
    }


    public async updateUsuario(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const { nombre, apellidos, username, password, cveRol } = req.body;

            // Check if user exists
            const usuarioExists = await prisma.usuario.findUnique({
                where: { cveUsuario: Number(id) }
            });

            if (!usuarioExists) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }

            // Update the user
            const updatedUsuario = await prisma.usuario.update({
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
        } catch (error: any) {
            return res.status(500).json({ message: "error al acctualizar usuario" });
        }
    }

}

export const usuarioController = new UsuarioController();

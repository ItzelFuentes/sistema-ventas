import { Request, Response } from "express";
import prisma from "../database/database";

class RolController {

    public async getRoles(req: Request, res: Response): Promise<Response> {
        try {
            const roles = await prisma.rol.findMany();
            return res.json(roles);
        } catch (error: any) {
            return res.status(500).json({ message: "Error retrieving roles" });
        }
    }

    public async getRol(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const rol = await prisma.rol.findUnique({
                where: { cveRol: Number(id) }
            });
            if (!rol) {
                return res.status(404).json({ message: "Role not found" });
            }
            return res.json(rol);
        } catch (error: any) {
            return res.status(500).json({ message: "Error retrieving role" });
        }
    }

    public async createRol(req: Request, res: Response): Promise<Response> {
        try {
            const { descripcion, clave, activo } = req.body;
            const newRol = await prisma.rol.create({
                data: {
                    descripcion,
                    clave,
                    activo
                }
            });
            return res.status(201).json(newRol);
        } catch (error: any) {
            return res.status(500).json({ message: "Error creating role" });
        }
    }

    public async updateRol(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const { descripcion, clave, activo } = req.body;
            const updatedRol = await prisma.rol.update({
                where: { cveRol: Number(id) },
                data: {
                    descripcion,
                    clave,
                    activo
                }
            });
            return res.json(updatedRol);
        } catch (error: any) {
            return res.status(500).json({ message: "Error updating role" });
        }
    }

    public async deleteRol(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            await prisma.rol.delete({
                where: { cveRol: Number(id) }
            });
            return res.status(204).send();
        } catch (error: any) {
            return res.status(500).json({ message: "Error deleting role" });
        }
    }
}

export const rolController = new RolController();

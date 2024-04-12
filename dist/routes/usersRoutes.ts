import { Router } from "express";

const userRoutes = Router();

userRoutes.get("./", () => console.log("Hola desde rutas"));

export default userRoutes;

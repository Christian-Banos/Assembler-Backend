/* En este archivo, definimos métodos de controlador para manejar diferentes operaciones CRUD en los usuarios. 
Estos métodos serán utilizados por las rutas. */

import { Router } from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/usersControllers";

const userRoutes = Router();

//? Routes for getting all users, creating a new user, updating a user, and deleting a user
userRoutes.get("/users", getAllUsers);
userRoutes.post("/users", createUser);
userRoutes.put("/users/:id", updateUser);
userRoutes.delete("/users/:id", deleteUser);

export default userRoutes;

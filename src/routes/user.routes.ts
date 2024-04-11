import { Router } from "express";
import {
  createUser,
  getAllUser,
  updateuser,
  deleteUser,
} from "../controllers/user.controllers";

const userRouter = Router();

userRouter.get("/", getAllUser);
userRouter.post("/", createUser);
userRouter.patch("/:userId", updateuser);
userRouter.delete("/:userId", deleteUser);

export default userRouter;

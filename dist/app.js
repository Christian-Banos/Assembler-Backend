"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* import express from "express";
import { Application, Request, Response } from "express";
import app from "./server";

const app: Application = express();
const POST = 3000;
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(POST, () => {
  console.log(`Server is running on port ${POST}`);
}); */
const server_1 = __importDefault(require("./server"));
const config_1 = __importDefault(require("../src/config/config"));
console.log(config_1.default);
const PORT = config_1.default.app.PORT;
server_1.default.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
//?En este archivo, definimos las rutas para manejar operaciones relacionadas con el usuario utilizando los métodos de controlador correspondientes.

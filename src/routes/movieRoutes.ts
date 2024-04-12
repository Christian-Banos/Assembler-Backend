import { Router } from "express";
import { createMovie } from "../controllers/movieControllers";

const movieRutes = Router();

movieRutes.post("/", createMovie);

export default movieRutes;

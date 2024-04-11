import { Router } from "express";
import { createMovie, getAllMovies } from "../controllers/movie.controllers";

export { Router } from "express";

const movieRoutes = Router();

movieRoutes.get("/", getAllMovies);
movieRoutes.post("/:userId", createMovie);

export default movieRoutes;

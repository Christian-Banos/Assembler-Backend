import { Request, Response } from "express";
import MovieModel from "../../src/models/movie.model";
import userModel from "../models/user.model";

export const createMovie = async (req: Request, res: Response) => {
  const { name, image } = req.body;
  const { userId } = req.params;
  try {
    const movie = await MovieModel.create({ name, image });
    await userModel.findByIdAndUpdate(
      { _id: userId },
      { $push: { movies: movie._id } }
    );
    res.status(201).send(movie);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllMovie = async (req: Request, res: Response) => {
  try {
    const allMovies = await MovieModel.find();
    res.status(200).send(allMovies);
  } catch (error) {
    res.status(400).send(error);
  }
};

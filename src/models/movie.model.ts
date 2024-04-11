import { Schema, model } from "mongoose";

interface IMovieSchema {
  name: string;
  image: string;
  createAt?: Date;
  updateAt?: Date;
}

const movieSchema = new Schema<IMovieSchema>({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  /* createAt: {
    type: Date,
    default: Date.now,
  }, */
  /* updateAt: {
    type: Date,
    default: Date.now,
  }, */
});

const MovieModel = model<IMovieSchema>("movie", movieSchema);

export default MovieModel;

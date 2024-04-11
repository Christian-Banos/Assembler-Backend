import { Schema, model } from "mongoose";

interface IuserSchema {
  name: string;
  email: string;
  password: string;
  movies: string[];
  created_at: Date;
  updated_at: Date;
}

const userSchema = new Schema<IuserSchema>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    movies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Movie",
      },
    ],
  },

  { timestamps: true }
);

const UserModel = model<IuserSchema>("user", userSchema);

export default UserModel;

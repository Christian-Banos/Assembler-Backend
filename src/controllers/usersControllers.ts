import { Request, Response } from "express";
import UserModel from "../models/user.model";
import userModel from "../models/user.model";

// Example controller method for getting all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await UserModel.find().populate("movies");
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Example controller method for creating a new user
export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await UserModel.create({ name, email, password });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Example controller method for updating a user
export const updateUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const { userId } = req.params;

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      { _id: userId },
      { name, email, password },
      { new: true }
    );
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Example controller method for deleting a user
export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const userDelete = await userModel.findByIdAndDelete({ _id: userId });
    res.status(204).send(userDelete);
  } catch (error) {
    res.status(400).send(error);
  }
};

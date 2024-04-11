import { Request, Response } from "express";
import UserModel from "../models/user.model";
import prisma from "../db/client";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany({
      include: {
        movies: true,
      },
    });
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: { name, email, password },
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateuser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const { userId } = req.params;

  try {
    const userUpdate = await prisma.user.update({
      where: { id: userId },
      data: { name, email, password },
    });
    /* { _id: userId },
      { name, email, password },
      { new: true } */ // nos devuelve el objeto cambiado

    res.status(201).send(userUpdate);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const userDeleted = await prisma.user.delete({
      where: { id: userId },
    });
    res.status(200).send(userDeleted);
  } catch (error) {
    res.status(400).send(error);
  }
};

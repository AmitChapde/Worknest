import { Request, Response } from "express";
import { register } from "../services/auth.service";
import { createUser } from "../types/user.types";

const authController = async (
  req: Request<{}, {}, createUser>,
  res: Response
) => {
  try {
    const newUser = await register(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: "Error creating user", error: error.message });
    }
  }
};

export { authController };

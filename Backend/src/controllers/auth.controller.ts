import { Request, Response } from "express";
import { register, login } from "../services/auth.service";
import { LoginInput, RegisterInput } from "../types/user.types";

const registerController = async (
  req: Request<{}, {}, RegisterInput>,
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

const loginController = async (
  req: Request<{}, {}, LoginInput>,
  res: Response
) => {
  try {
    const user = await login(req.body);
    res.status(200).json({
      status: "success",
      data: {
        token: user.token,
        user: user.user,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: "Error logging in", error: error.message });
    }
  }
};

export { registerController, loginController };

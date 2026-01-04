import User from "../models/user.model";
import { createUser } from "../types/user.types";

const register = async (data: createUser) => {
  const { name, email, password } = data;
  const newUser = new User({ name, email, password });
  await newUser.save();
  return newUser;
};

export { register };

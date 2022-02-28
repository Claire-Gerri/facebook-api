import * as UserModel from "../models/user.model";
import { HttpException, HttpStatus } from "../errors/HttpException.error";
import jwt from "jsonwebtoken";

export const login = async ({ body }, response) => {
  const { email, password } = body;
  const user = await UserModel.findUserByCredentials({
    email,
    password,
  });
  if (!user) {
    throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
  }

  const token = jwt.sign({ id: user.id }, "SECRET");
  response.json({
    data: {
      user,
      token,
    },
  });
};

export const register = async ({ body }, response) => {
  const { email, password, firstName, lastName } = body;
  const user = await UserModel.createOneUser({
    email,
    password,
  });
  const profile = await UserModel.createOneProfile({
    firstName,
    lastName,
    userId: user.id,
  });
  response.json({
    data: {
      user,
      profile,
    },
  });
};

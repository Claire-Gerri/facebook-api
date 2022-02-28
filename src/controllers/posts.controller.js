import * as PostModel from "../models/posts.model";
import { HttpException, HttpStatus } from "../errors/HttpException.error";
import jwt from "jsonwebtoken";

export const createOne = async ({ body, headers }, response) => {
  const { message } = body;
  const { token } = headers;
  const author = jwt.verify(token, "SECRET");

  const post = await PostModel.createOne({
    message,
    authorId: author.id,
  });

  response
  .status(201)
  .json({
    data: {
      post,
    },
  });
};

export const findOne = async ({ params: { id } }, response, next) => {
  const post = await PostModel.findOneById(Number(id));
  if (!post) {
    return next(new HttpException("Post not found", HttpStatus.NOT_FOUND));
  }

  response
  .status(200)
  .json({
    data: {
      post,
    },
  });
};

export const findAll = async (request, response) => {
  const posts = await PostModel.findAll();

  response
  .status(200)
  .json({
    data: {
      posts,
    },
  });
};

export const updateOne = async ({ params: { id }, body }, response) => {
  const { message } = body;
  const post = await PostModel.updateOne(Number(id), message);

  response
  .status(200)
  .json({
    data: {
      post,
    },
  });
};

export const deleteOne = async ({ params: { id } }, response) => {
  await PostModel.deleteOne(Number(id));

  response
  .status(204)
  .end();
};

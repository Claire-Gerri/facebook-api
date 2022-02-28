import * as UserModel from "../models/user.model";

export const findUsersPosts = async ({ params: { id } }, response) => {
  const posts = await UserModel.findAllPosts(id);
  response
  .status(200)
  .json({
    data: {
      posts,
    },
  });
};

export const findUsersProfile = async ({ params: { id } }, response) => {
  const profile = await UserModel.findProfileById(id);
  response.json({
    data: {
      profile,
    },
  });
};

export const updateOneProfile = async ({ params: { id }, body }, response) => {
  const { firstName, lastName } = body;
  const profile = await UserModel.updateOneProfile({
    id,
    firstName,
    lastName,
  });
  response
  .status(200)
  .json({
    data: {
      profile,
    },
  });
};

export const deleteOneUser = async ({ params: { id } }, response) => {
  await UserModel.deleteOneProfile(id);
  await UserModel.deleteOneUser(id);
  response
  .status(204)
  .end();
};


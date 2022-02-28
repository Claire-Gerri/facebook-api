import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createOneUser = async ({ email, password }) => {
  return prisma.user.create({
    data: {
      email,
      password,
    },
  });
};

export const createOneProfile = async ({ firstName, lastName, userId }) => {
  return prisma.profile.create({
    data: {
      firstName,
      lastName,
      userId,
    },
  });
};

export const findUserByCredentials = ({ email, password }) => {
  return prisma.user.findFirst({
    where: {
      email,
      password,
    },
  });
};

export const findProfileById = (userId) => {
  return prisma.profile.findUnique({
    where: {
      userId,
    },
  });
};

export const findAllPosts = async (authorId) => {
  return prisma.post.findMany({
    where: {
      authorId,
    },
  });
};

export const updateOneProfile = async (userId, firstName, lastName) => {
  return prisma.profile.update({
    where: {
      userId,
    },
    data: {
      firstName,
      lastName,
    },
  });
};

export const deleteOneProfile = async (userId) => {
  await prisma.profile.delete({
    where: {
      userId,
    },
  });
};

export const deleteOneUser = async (id) => {
  await prisma.user.delete({
    where: {
      id,
    },
  });
};

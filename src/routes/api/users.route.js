import { Router } from "express";
import * as UserController from "../../controllers/users.controller";

const api = Router();

api.get("/:id/posts", UserController.findUsersPosts);
api.get("/:id/profile", UserController.findUsersProfile);
api.patch("/:id/profile", UserController.updateOneProfile);
api.delete("/:id", UserController.deleteOneUser);

export default api;

import { Router } from "express";
import AuthenticationRoutes from "./authentication.route";
import PostRoutes from "./posts.route";
import UserRoutes from "./users.route";

const api = Router();

api.use("/authentication", AuthenticationRoutes);
api.use("/posts", PostRoutes);
api.use("/users", UserRoutes);

export default api;

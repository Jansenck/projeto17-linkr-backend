import { Router } from "express";

import { userProfile, getUserPost, searchUser } from "../controllers/profileController.js";

const profileRouter = Router();
profileRouter.get("/user/:id", userProfile, getUserPost);
profileRouter.get("/users", searchUser);

export default profileRouter;
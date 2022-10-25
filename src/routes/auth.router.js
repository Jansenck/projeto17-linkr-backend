import express from "express";
import { signIn, signUp } from "../controllers/auth.controller.js";
import { validateLogin, validateUser } from "../middlewares/auth.middleware.js";


const authRouter = express.Router();

authRouter.post("/sign-up", validateUser, signUp) ;
authRouter.post("/sign-in", validateLogin, signIn) ;


export default authRouter;
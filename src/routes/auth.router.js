import express from "express";
import { signUp } from "../controllers/auth.controller.js";
import { validateUser } from "../middlewares/auth.middleware.js";


const authRouter = express.Router();

authRouter.post("/signup", validateUser, signUp) ;
authRouter.get ('/status', (req, res)=>{
    res.send('Tudo funcionando!')
})


export default authRouter;
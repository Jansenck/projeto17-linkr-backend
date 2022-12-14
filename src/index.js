import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chalk from "chalk";
dotenv.config();

import hashtagRouter from "./routes/hashtag.routes.js";
import likeRouter from "./routes/like.routes.js";

import userRouter from "./routes/user.router.js";
import authRouter from "./routes/auth.router.js";

const server = express();
server.use(cors());
server.use(express.json());

server.use(hashtagRouter);

server.use(likeRouter);


server.use(authRouter);
server.use(userRouter);

server.listen(process.env.PORT, () => {
    console.log(chalk.bold("=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.="))
    console.log(chalk.green(`Running on port ${process.env.PORT}`))
    console.log(chalk.bold("=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.="))
})
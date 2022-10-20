import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chalk from "chalk";
dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.get("/status", (req, res) => {
    res.status(200).send("Tudo certo!");
})

server.listen(process.env.PORT, () => {
    console.log(chalk.bold("=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.="))
    console.log(chalk.green(`Runing on port ${process.env.PORT}`))
    console.log(chalk.bold("=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.="))
})
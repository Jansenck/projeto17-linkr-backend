import connection from "../database/database.js";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import bcrypt from 'bcrypt';


async function signUp(req, res) {
    const { email, password, username, image } = req.body;
    if (!email || !username || !password || !image) {
        return res.status(StatusCodes.UNPROCESSABLE_ENTITY).send(ReasonPhrases.UNPROCESSABLE_ENTITY);
    }

    const encrypetPassword = bcrypt.hashSync(password, 11);

    try {

        const insertUser = await connection.query(
            `INSERT INTO users (username, email, image, password) VALUES ($1, $2, $3, $4);`, [username, email, image,encrypetPassword]
        );
        return res.status(StatusCodes.CREATED).send(ReasonPhrases.CREATED);
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.detail);
    }
}


export { signUp }
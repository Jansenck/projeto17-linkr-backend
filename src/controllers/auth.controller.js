import connection from "../database/database.js";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';


async function signUp(req, res) {
    const { email, password, username, image } = req.body;
    if (!email || !username || !password || !image) {
        return res.status(StatusCodes.UNPROCESSABLE_ENTITY).send(ReasonPhrases.UNPROCESSABLE_ENTITY);
    }

    const encrypetPassword = bcrypt.hashSync(password, 11);

    try {
        const insertUser = await connection.query(
            `INSERT INTO users (username, email, image, password) VALUES ($1, $2, $3, $4);`, [username, email, image, encrypetPassword]
        );

        return res.status(StatusCodes.CREATED).send(ReasonPhrases.CREATED);

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.detail);
    }
}


async function signIn(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.sendStatus(StatusCodes.UNPROCESSABLE_ENTITY);
    }

    try {

        const user = await connection.query(
            `SELECT * FROM users WHERE email = $1`, [email]
        );

        const isValidPass = bcrypt.compareSync(password, user.rows[0].password);

        if (user.rowCount === 0 || !isValidPass) {
            return res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
        }

        const findSession = await connection.query(
            `SELECT * FROM sessions WHERE "userId" = $1`, [user.rows[0].id]
        );

        if (findSession.rowCount !== 0) {
            const deleteSession = await connection.query(
                `DELETE FROM sessions WHERE "userId" = $1;`, [user.rows[0].id]
            );
        }


        const token = uuid();

        const insertSessions = await connection.query(
            `INSERT INTO sessions (token, "userId") VALUES ($1, $2);`, [token, user.rows[0].id]
        );

        return res.status(StatusCodes.OK).send({ token: token });

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.detail);
    }
}



export { signUp, signIn }
import connection from "../database/database.js";
import { StatusCodes } from  "http-status-codes";

async function likePublication(req, res) {
    const {publicationId} = req.params;
    const token = req.headers.authorization?.replace("Bearer ", "");

    try {
        const session = (await connection.query('SELECT * FROM sessions WHERE token = $1', [token])).rows[0];
        if (!session) {
            return res.sendStatus(401);
        }

        const postIsliked = (await connection.query('SELECT * FROM likes WHERE "userId" = $1 AND "publicationId" = $2;', [session.userId, publicationId])).rows[0];
        if(postIsliked) {
            await connection.query('DELETE FROM likes WHERE "userId" = $1 AND "publicationId" = $2;', [session.userId, publicationId]);
            return res.sendStatus(204);
        }

        await connection.query('INSERT INTO likes ("publicationId", "userId") VALUES ($1, $2)', [publicationId, session.userId]);
        return res.sendStatus(201);
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export {likePublication};



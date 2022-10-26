import { StatusCodes } from  "http-status-codes";
import connection from "../database/database.js";

async function listPublications(req, res){

    try {

        const publications = await connection.query(

            `
            SELECT
                publications.id,
                publications."userId",
                u1.username,
                publications.link,
                publications.description,
                u1.image AS "profilePicture",

                u2.username AS "whoLiked"

            FROM publications 
            JOIN users u1 ON u1.id = publications."userId"
            LEFT JOIN likes ON likes."publicationId" = publications.id 
            LEFT JOIN users u2 ON u2.id = likes."userId"
            ORDER BY publications.id DESC
            LIMIT 20;`
        );
        
        return res.status(StatusCodes.OK).send(publications.rows);

    } catch (error) {
        console.error(error);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function publish(req, res){

    try {

        const { link, description, userId } = req.body;

        await connection.query(
            `INSERT INTO "publications" (link, description, "userId") VALUES ($1, $2, $3);`, 
            [link, description, userId]
        );

        return res.sendStatus(StatusCodes.CREATED);

    } catch (error) {
        console.error(error);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deletePublication(req, res){

    try {
        /* TODO: PEGAR O TOKEN DO CONTEXT */

        const token = "token3"
        const { publicationId } = req.params;
        
        await connection.query(
            `SELECT 
                publications.id,
                users.id AS "userId",
                sessions.token
                FROM publications
                JOIN users ON publications."userId" = $1
                JOIN sessions ON sessions.token = $2
            ;`, [publicationId, token]
        );

        return res.sendStatus(StatusCodes.OK);

    } catch (error) {
        console.error(error);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export { 
    listPublications, 
    deletePublication,
    publish
};
import { StatusCodes } from  "http-status-codes";
import connection from "../database/database.js";

async function listPublications(req, res){

    try {

        const publications = await connection.query(

            `SELECT 
                publications.id AS "id",
                users.username,
                users.image,
                publications.link,
                publications.description

                FROM "publications"
                JOIN "users" ON publications."userId" = users.id
                JOIN "likes" ON likes."publicationId" = publications.id
                ORDER BY publications.id DESC
                LIMIT 20;`
        );

        const publicationsLikes = publications.rows.map( async publication => {

            const { id } = publication;

            const likes = (await connection.query(

                `SELECT 
                COUNT(likes."publicationId") 
                FROM likes
                JOIN publications ON likes."publicationId" = publications.id
                WHERE "publicationId" = $1;`,
                [id]

            )).rows[0];

            return { ...publication, likes }

            
        });

        console.log(publicationsLikes)

        return res.status(StatusCodes.OK).send(publications.rows);

    } catch (error) {
        console.error(error);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function publish(req, res){

    try {

        /* TODO: apaagar o userId improvisado */

        const { link, description, userId } = req.body;

        await connection.query(
            `INSERT INTO "publications" (link, description, "userId") VALUES ($1, $2, $3);`, 
            [link, description, 1]
        );

        return res.sendStatus(StatusCodes.CREATED);

    } catch (error) {
        console.error(error);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export { 
    listPublications, 
    publish 
};
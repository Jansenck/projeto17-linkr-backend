import { StatusCodes } from  "http-status-codes";
import connection from "../database/database.js";

async function listPublications(req, res){
    const page = parseInt(req.query.page);
    
    let isTheLastPage = false;
    let start = (page * 10) - 10;
    let limitPage = start + 10;

    try {

        const publications = (await connection.query(

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
            LIMIT 10
            ;`
        )).rows;
        console.log("Vai de: " + (start))
        console.log("Até: " + (limitPage))
        console.log("Tamanho da array: " + publications.length)

        //Pegar a última página
        const paginatedPublications = publications.slice(start, limitPage);
        //console.log(publications[publications.length - 1])
        if (paginatedPublications.includes(publications[publications.length - 1])) {
            isTheLastPage = true;
        }

        return res.status(StatusCodes.OK).send({
            page: page,
            isTheLastPage: isTheLastPage,
            publications: paginatedPublications
        });

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

export { 
    listPublications, 
    publish 
};
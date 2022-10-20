import connection from "../database/database.js";
import { StatusCodes } from  "http-status-codes";

async function listpublicationByHashtag(req, res) {
    const {hashtag} = res.locals;

    try {
        const publicationByHashtag = await connection.query(`
        SELECT
            "hashtagsPublication".id,
            publications.link,
            publications.description,
            users.username,
            users.image,
            COUNT(likes.id) AS likes
        FROM hashtag 
        JOIN "hashtagsPublication" ON hashtag.id = "hashtagsPublication"."hashtagId" 
        JOIN publications ON publications.id = "hashtagsPublication"."publicationId" 
        JOIN users ON users.id = publications."userId"
        JOIN likes ON likes."publicationId" = publications.id
        GROUP BY likes.id 
        WHERE hashtag.name = $1
        `, [hashtag]);
        
        return res.status(200).send(publicationByHashtag);
    } catch (error) {
        console.log(error.messgage);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export {listpublicationByHashtag};
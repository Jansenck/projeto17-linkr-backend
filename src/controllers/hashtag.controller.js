import connection from "../database/database.js";
import { StatusCodes } from  "http-status-codes";

async function listpublicationByHashtag(req, res) {
    const {hashtag} = res.locals;

    try {
        const publicationByHashtag = await connection.query(`
        SELECT 
            publications.id,
            publications.link,
            publications.description,
            users.username,
            users.image,
            COUNT(likes.id) AS likes,
            hashtag.name AS hashtag
        FROM publications
        JOIN users ON users.id = publications."userId"
        JOIN likes ON likes."publicationId" = publications.id
        JOIN "hashtagsPublication" ON "hashtagsPublication"."publicationId" = publications.id
        JOIN hashtag ON "hashtagsPublication"."hashtagId" = hashtag.id
        GROUP BY 
            publications.id,
            users.username,
            users.image,
            hashtag.name
        ;
        `);

        const postFilterByHashtags = publicationByHashtag.rows.filter(publication => publication.hashtag === hashtag);
        
        return res.status(200).send(postFilterByHashtags);
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function listTrendingHashtags(req, res) {
    try {
        const hashtags = (await connection.query(`
        SELECT 
            hashtag.id,
            hashtag.name,
        COUNT(hashtag.name) AS count
        FROM hashtag
        JOIN "hashtagsPublication" ON "hashtagsPublication"."hashtagId" = hashtag.id
        GROUP BY 
            hashtag.name,
        hashtag.id
        ORDER BY count DESC;
        `)).rows;

        return res.status(200).send(hashtags);
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export {
    listpublicationByHashtag,
    listTrendingHashtags,
};
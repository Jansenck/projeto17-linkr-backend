import { StatusCodes } from  "http-status-codes";

import { hashtagSchema, publicationIdSchema } from "../schemas/hashtag.schemas.js";
import connection from "../database/database.js";

function validateHashtagSchema(req, res, next) {
    const {hashtag} = req.params;
    const validation = hashtagSchema.validate({hashtag});
    if (validation.error) {
        console.log(validation.error)
        return res.sendStatus(422);
    }

    res.locals.hashtag = hashtag;
    next();
}

function validatePublicationIdSchema(req, res, next) {
    const {publicationId} = req.params;
    const validation = publicationIdSchema.validate({publicationId});
    if (validation.error) {
        return res.sendStatus(404);
    }
    res.locals.publicationId = publicationId;
    next();
}

async function validatePublicationId(req, res, next) {
    const {publicationId} = res.locals;

    try {
        const publication = (await connection.query('SELECT * FROM publications WHERE id = $1;', [publicationId])).rows[0];
        if (!publication) {
            return res.status(404).send("Essa publicação não existe");
        }

        
        next();
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export {validateHashtagSchema, validatePublicationId, validatePublicationIdSchema};
import { hashtagSchema } from "../schemas/hashtag.schemas.js";

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

export {validateHashtagSchema};
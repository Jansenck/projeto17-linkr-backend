import joi from "joi";

const hashtagSchema = joi.object({
    hashtag: joi.string().min(1).max(50).required()
})

const publicationIdSchema = joi.object({
    publicationId: joi.number().required()
})

export {hashtagSchema, publicationIdSchema};
import joi from "joi";

const hashtagSchema = joi.object({
    hashtag: joi.string().min(1).max(50).required()
})

export {hashtagSchema};
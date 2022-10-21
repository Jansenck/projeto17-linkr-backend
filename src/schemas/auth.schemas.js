import joi from 'joi';


const signUpSchema = joi.object({
    email: 
        joi
            .string()
            .regex(/\S+@\S+\.\S+/)
            .required(),
    password: 
        joi
            .string()
            .min(6)
            .required(),
    username:
        joi
            .string()
            .min(1)
            .required(),
    image: 
        joi
            .string()
            .regex(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)
            .required()
});




export { signUpSchema}
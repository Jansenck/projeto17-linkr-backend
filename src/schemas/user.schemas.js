import joi from "joi";

const validationPublication = joi.object({
    
    link: 
        joi
            .string()
            .empty()
            .regex(
                /^https?:\/\/(?:www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%+.~#?&/=]*)/
            )
            .required(),

    description: 
        joi
            .string()
            .empty()
});

export { validationPublication };

import joi from "joi";

const validationPublication = joi.object({
    
    link: 
        joi
            .string()
            .empty()
            .required(),

    description: 
        joi
            .string()
            .empty()
});

export { validationPublication };

import { signUpSchema } from "../schemas/auth.schemas.js";
import { StatusCodes } from "http-status-codes";



function validateUser(req, res, next) {

    const { email, password, username, image } = req.body
    const newUser = { email, password, username, image }


    const validation = signUpSchema.validate(newUser, {
        abortEarly: false,
    });

    if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        return res.status(StatusCodes.UNPROCESSABLE_ENTITY).send(errors);
    }

    next()
}


export { validateUser }
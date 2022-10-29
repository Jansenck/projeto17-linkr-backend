import { StatusCodes } from "http-status-codes";
import { validationPublication } from "../schemas/user.schemas.js"; 

async function validatePublication(req,res, next){

    //const token = req.headers.authorization?.replace("Bearer ", "");
    //if(!token) return res.sendStatus(StatusCodes.UNAUTHORIZED);

    try {

        const publicationContent = req.body;
        if(!publicationContent) return res.sendStatus(StatusCodes.BAD_REQUEST);

        const { link, description } = req.body;
        const isValidPublication = validationPublication.validateAsync(
            {link, description}, 
            {abortEarly: false}
        );

        if(isValidPublication.error){
            const publicationError = isValidPublication.error.details.map(
                detail => detail.message
            );
            return res.status(StatusCodes.BAD_REQUEST).send(publicationError);
        }
    
    } catch (error) {
        console.error(error.message);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }

    next();
}

export { validatePublication };


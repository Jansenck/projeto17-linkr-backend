import { StatusCodes } from "http-status-codes";
import connection from "../database/database.js";

try {

    const publicationContent = req.body;
    if(!publicationContent) return res.sendStatus(StatusCodes.BAD_REQUEST);

    
    
} catch (error) {
    console.error(error.message);
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
}
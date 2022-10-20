import express from "express";
import { StatusCodes } from  "http-status-codes";
import connection from "../database/database.js";

async function publish(req, res){

    try {
        
    } catch (error) {
        console.error(error);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export { publish };
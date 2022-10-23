import {  Router } from "express";

import { validatePublication } from "../middlewares/user.middleware.js";
import { publish } from "../controllers/user.controller.js";

const route = Router();

route.get("/publish", validatePublication, publish);


export default route;
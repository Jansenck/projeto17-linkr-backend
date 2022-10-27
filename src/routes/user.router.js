import {  Router } from "express";

import { validatePublication } from "../middlewares/user.middleware.js";
import { listPublications, publish, listNumberPublications } from "../controllers/user.controller.js";

const route = Router();

route.get("/timeline", listPublications);
route.post("/timeline", validatePublication, publish);
route.get("/timeline/size", listNumberPublications);

export default route;
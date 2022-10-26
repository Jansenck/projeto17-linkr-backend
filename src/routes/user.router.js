import {  Router } from "express";

import { validatePublication } from "../middlewares/user.middleware.js";
import { listPublications, publish, deletePublication } from "../controllers/user.controller.js";

const route = Router();

route.get("/timeline", listPublications);
route.post("/timeline", validatePublication, publish);
route.delete("/timeline/publication/:publicationId", deletePublication);

export default route;
import { Router } from "express";

import { listpublicationByHashtag } from "../controllers/hashtag.controller.js";
import { validateHashtagSchema } from "../middlewares/hashtag.middlewares.js";

const router = Router();

router.get("/hashtag/:hashtag", validateHashtagSchema ,listpublicationByHashtag);

export default router;
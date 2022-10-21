import { Router } from "express";

import { listpublicationByHashtag, listTrendingHashtags } from "../controllers/hashtag.controller.js";
import { validateHashtagSchema } from "../middlewares/hashtag.middlewares.js";

const router = Router();

router.get("/hashtag/:hashtag", validateHashtagSchema ,listpublicationByHashtag);
router.get("/hashtag", listTrendingHashtags);

export default router;
import { Router } from "express";

import { listpublicationByHashtag, listTrendingHashtags, listHashtagsByPublication } from "../controllers/hashtag.controller.js";
import { validateHashtagSchema, validatePublicationId, validatePublicationIdSchema } from "../middlewares/hashtag.middlewares.js";

const router = Router();

router.get("/hashtag/:hashtag", validateHashtagSchema ,listpublicationByHashtag);
router.get("/hashtag", listTrendingHashtags);
router.get("/hashtag/publication/:publicationId",validatePublicationIdSchema,validatePublicationId ,listHashtagsByPublication);

export default router;
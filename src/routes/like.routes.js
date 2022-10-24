import { Router } from "express";

import { likePublication, verifyIfUserLikedPublication } from "../controllers/like.controller.js";

const router = Router();

router.post("/like/:publicationId", likePublication);
router.get("/like/:publicationId/isLiked", verifyIfUserLikedPublication);

export default router;
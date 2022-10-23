import { Router } from "express";

import { likePublication } from "../controllers/like.controller.js";

const router = Router();

router.post("/like/:publicationId", likePublication);

export default router;
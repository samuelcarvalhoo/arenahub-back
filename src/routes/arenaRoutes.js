import express from "express";
import { arenaController } from "../controllers/arenaController.js";

const router = express.Router();

router.get("/arena", arenaController.getArena);
router.post("/arena", arenaController.createArena);
router.get("/arena/:id", arenaController.getArenaById);

export default router;

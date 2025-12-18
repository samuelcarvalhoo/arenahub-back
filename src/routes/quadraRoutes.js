import express from "express";
import { quadraController } from "../controllers/quadraController.js";

const router = express.Router();

router.get("/quadra", quadraController.getQuadra);
router.post("/quadra", quadraController.createQuadra);
router.get("/quadra/arena/:slug", quadraController.getQuadraByArenaId);
router.put("/quadra/:id", quadraController.updateQuadra);
router.delete("/quadra/:id", quadraController.deleteQuadra);
router.get("/quadra/:id", quadraController.getQuadraById);

export default router;

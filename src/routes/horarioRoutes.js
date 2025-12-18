import express from "express";
import { horarioController } from "../controllers/horarioController.js";

const router = express.Router();

router.put("/horario", horarioController.updateHorario);
router.delete("/horario/:id_arena/:dia", horarioController.deleteHorario);
router.get("/horario", horarioController.getHorario);
router.get("/horario/:id/:dia", horarioController.getHorarioByArenaId);
router.post("/horario", horarioController.createHorario);

export default router;

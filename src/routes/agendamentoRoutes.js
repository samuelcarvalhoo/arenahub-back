import express from "express";
import { agendamentoController } from "../controllers/agendamentoController.js";

const router = express.Router();

router.get("/agendamentos/concluidos/:id", agendamentoController.getAgendamentoConcluido);
router.get("/agendamentos/user/:id", agendamentoController.getByUser);
router.get("/agendamentos/:id_quadra/:date", agendamentoController.getAgendamentoByQuadraAndDate);
router.get("/agendamentos", agendamentoController.getAgendamento);
router.post("/agendamentos", agendamentoController.createAgendamento);
router.delete("/agendamentos/:id", agendamentoController.deleteAgendamento);

export default router;

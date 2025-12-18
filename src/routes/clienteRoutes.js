import express from "express";
import { clienteController } from "../controllers/clienteController.js";

const router = express.Router();

router.post("/cliente/login", clienteController.loginCliente);
router.post("/cliente/cadastro", clienteController.createCliente);

export default router;

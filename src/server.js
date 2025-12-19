import express from "express";
import cors from "cors";
import arena from "./routes/arenaRoutes.js";
import quadra from "./routes/quadraRoutes.js";
import horario from "./routes/horarioRoutes.js";
import agendamento from "./routes/agendamentoRoutes.js";
import cliente from "./routes/clienteRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/ping', (req, res) => {
  console.log('Ping recebido! Mantendo a API acordada.'); 
  
  res.status(200).send('pong');
});

app.use("/", arena);
app.use("/", quadra);
app.use("/", horario);
app.use("/", agendamento);
app.use("/", cliente);


app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});


app.listen(3002, () => {
  console.log("Servidor rodando na porta 3002");
});

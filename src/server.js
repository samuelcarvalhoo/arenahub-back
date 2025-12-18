import express from "express";
import arena from "./routes/arenaRoutes.js";
import quadra from "./routes/quadraRoutes.js";
import horario from "./routes/horarioRoutes.js";
import agendamento from "./routes/agendamentoRoutes.js";
import cliente from "./routes/clienteRoutes.js";

const app = express();
app.use(express.json());

app.use("/", arena);
app.use("/", quadra);
app.use("/", horario);
app.use("/", agendamento);
app.use("/", cliente);


app.listen(3002, () => {
  console.log("Servidor rodando na porta 3002");
});

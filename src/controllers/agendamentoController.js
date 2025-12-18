import { agendamentoApplication } from "../application/agendamentoApplication.js";

async function getAgendamento(req, res) {
  try {
    const agendamentos = await agendamentoApplication.getAgendamento();
    res.json(agendamentos);
  } catch (err) {
    console.error("Erro ao buscar horários:", err);
    res.status(500).json({ error: "Horário não encontrado" });
  }
}

async function getAgendamentoByQuadraAndDate(req, res) {
  const { id_quadra, date } = req.params;
  console.log("Params recebidos:", { id_quadra, date });

  try {
    const arenas = await agendamentoApplication.getAgendamentoByQuadraAndDate(id_quadra, date);
    res.json(arenas);
  } catch (err) {
    console.error("Erro ao buscar agendamentos:", err);
    res.status(500).json({ error: err.message });
  }
}

async function createAgendamento(req, res) {
  const { id_quadra, id_cliente, dia, inicio, fim, valor_total } = req.body;
  console.log(req.body);

  try {
    const newAgendamento = await agendamentoApplication.createAgendamento(id_quadra, id_cliente, dia, inicio, fim, valor_total);
    res.json(newAgendamento);
  } catch (err) {
    console.error("Erro ao criar agendamento:", err);
    res.status(500).json({ error: err.message});
  }
}

async function getAgendamentoConcluido(req,res){
  const {id} = req.params;
  console.log("Params recebidos:", { id });

  try {
    const arenas = await agendamentoApplication.getAgendamentoConcluido(id);
    res.json(arenas);
  } catch (err) {
    console.error("Erro ao buscar agendamentos concluidos:", err);
    res.status(500).json({ error: err.message});
  }
}

async function deleteAgendamento(req, res) {
  const { id } = req.params;
  try {
    await agendamentoApplication.deleteAgendamento(id);
    res.status(204).send();
  } catch (err) {
    console.error("Erro ao deletar agendamento:", err);
    res.status(500).json({ error: "Erro ao deletar agendamento: " + err.message });
  }
}

async function getByUser(req, res) {
  const {id} = req.params;
  try {
    const agendUser = await agendamentoApplication.getByUser(id);
    res.json(agendUser);
  } catch (err) {
    console.error("Erro ao procurar agendamentos:", err);
    res.status(500).json({ error: "Erro ao procurar agendamentos: " + err.message });
  }
}

export const agendamentoController = {
  getAgendamento,
  getAgendamentoByQuadraAndDate,
  createAgendamento,
  getAgendamentoConcluido,
  deleteAgendamento,
  getByUser
};
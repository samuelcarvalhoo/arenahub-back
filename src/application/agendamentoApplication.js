import { agendamentoServices } from "../services/agendamentoServices.js";

async function getAgendamento() {
  return await agendamentoServices.getAgendamento();
}

async function getAgendamentoByQuadraAndDate(id_quadra, date) {
  return await agendamentoServices.getAgendamentoByQuadraAndDate(id_quadra, date);
}

async function createAgendamento(id_quadra, id_cliente, dia, inicio, fim, valor_total) {
  const conflitos = await agendamentoServices.findConflitos(id_quadra, dia, inicio, fim);

  console.log("Checking conflicts for:", { id_quadra, dia, inicio, fim });
  console.log("Conflicts found:", conflitos);

  if (conflitos.length > 0) {
    throw new Error("Já existe um agendamento nesse horário.");
  }

  return await agendamentoServices.createAgendamento(id_quadra, id_cliente, dia, inicio, fim, valor_total);
}

async function getAgendamentoConcluido(id) {
  return await agendamentoServices.getAgendamentoConcluido(id);
}

async function deleteAgendamento(id) {
  return await agendamentoServices.deleteAgendamento(id);
}

async function getByUser(id) {
  return await agendamentoServices.getByUser(id);
}

export const agendamentoApplication = {
  getAgendamento,
  getAgendamentoByQuadraAndDate,
  createAgendamento,
  getAgendamentoConcluido,
  deleteAgendamento,
  getByUser
}
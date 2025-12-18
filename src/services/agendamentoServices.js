import { agendamentoModel } from "../models/agendamentoModel.js";

async function getAgendamento() {
  return await agendamentoModel.getAgendamento();
}

async function getAgendamentoByQuadraAndDate(id_quadra , date) {
    const agenda =  await agendamentoModel.getAgendamentoByQuadraAndDate(id_quadra , date);
    if(agenda.length == 0) throw new Error("Agendamento não encontrado");
  return agenda;
}

async function createAgendamento (id_quadra, id_cliente, dia, inicio, fim, valor_total){
  const newAgendamento = await agendamentoModel.createAgendamento(id_quadra, id_cliente, dia, inicio, fim, valor_total);
  return newAgendamento;
}

async function findConflitos(id_quadra, dia, inicio, fim) {
  return await agendamentoModel.findConflitos(id_quadra, dia, inicio, fim);
}

async function getAgendamentoConcluido(id){
  return await agendamentoModel.getAgendamentoConcluido(id);
}

async function deleteAgendamento(id) {
  if (!id) throw new Error("ID não fornecido");
  return await agendamentoModel.deleteAgendamento(id);
}

async function getByUser(id){
  if (!id) throw new Error("ID não fornecido");
  const user = await agendamentoModel.getByUser(id);
  return user;
}

export const agendamentoServices = {
  getAgendamento,
  getAgendamentoByQuadraAndDate,
  createAgendamento,
  findConflitos,
  getAgendamentoConcluido,
  deleteAgendamento,
  getByUser
}
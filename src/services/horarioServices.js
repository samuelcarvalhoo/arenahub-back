import { horarioModel } from "../models/horarioModel.js";
import { arenaModel } from "../models/arenaModel.js";

async function getHorario() {
  return await horarioModel.getHorario();
}

async function getHorarioByArenaId(identifier, dia) {
  if (!identifier) throw new Error("ID ou Slug não fornecido");

  let id = identifier;

  if (isNaN(identifier)) {
    const arena = await arenaModel.getArenaBySlug(identifier);
    if (!arena) throw new Error("Arena não encontrada para o slug fornecido");
    id = arena.id;
  }

  const horario = await horarioModel.getHorarioByArenaId(id, dia);
  if (horario.length == 0) throw new Error("Horario não encontrado");
  return horario;
}

async function createHorario(id_arena, dia, abertura, fechamento) {
  if (!id_arena || !abertura || !fechamento || dia == null || dia == undefined) {
    throw new Error("Todos os campos (id_arena, abertura, fechamento, dia) são obrigatórios.");
  }
  return await horarioModel.createHorario(id_arena, dia, abertura, fechamento);
}

async function deleteHorario(id_arena, dia) {
  if (!id_arena || !dia) {
    throw new Error("id_arena e dia são obrigatórios.");
  }
  return await horarioModel.deleteHorario(id_arena, dia);
}

async function updateHorario(id_arena, dia, abertura, fechamento) {
  if (!id_arena || !abertura || !fechamento || dia == null || dia == undefined) {
    throw new Error("Todos os campos (id_arena, abertura, fechamento, dia) são obrigatórios.");
  }
  return await horarioModel.updateHorario(id_arena, dia, abertura, fechamento);
}

export const horarioServices = {
  getHorario,
  getHorarioByArenaId,
  createHorario,
  deleteHorario,
  updateHorario
}
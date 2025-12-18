import { horarioServices } from "../services/horarioServices.js";

async function getHorario() {
  return await horarioServices.getHorario();
}

async function getHorarioByArenaId(id, dia) {
  return await horarioServices.getHorarioByArenaId(id, dia);
}

async function createHorario(id_arena, dia, abertura, fechamento) {
  return await horarioServices.createHorario(id_arena, dia, abertura, fechamento);
}

async function deleteHorario(id_arena, dia) {
  return await horarioServices.deleteHorario(id_arena, dia);
}

async function updateHorario(id_arena, dia, abertura, fechamento) {
  return await horarioServices.updateHorario(id_arena, dia, abertura, fechamento);
}

export const horarioApplication = {
  getHorario,
  getHorarioByArenaId,
  createHorario,
  deleteHorario,
  updateHorario
}
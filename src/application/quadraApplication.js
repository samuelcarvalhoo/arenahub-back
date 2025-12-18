import { quadraServices } from "../services/quadraServices.js";

async function getQuadra() {
  return await quadraServices.getQuadra();
}

async function getQuadraById(id) {
  return await quadraServices.getQuadraById(id);
}

async function getQuadraByArenaId(slug) {
  return await quadraServices.getQuadraByArenaId(slug);
}

async function createQuadra(nome, descricao, valor_hora, id_arena) {
  return await quadraServices.createQuadra(nome, descricao, valor_hora, id_arena);
}

async function updateQuadra(id, nome, descricao, valor_hora, id_arena) {
  return await quadraServices.updateQuadra(id, nome, descricao, valor_hora, id_arena);
}

async function deleteQuadra(id) {
  return await quadraServices.deleteQuadra(id);
}

export const quadraApplication = {
  getQuadra,
  getQuadraById,
  getQuadraByArenaId,
  createQuadra,
  updateQuadra,
  deleteQuadra
}
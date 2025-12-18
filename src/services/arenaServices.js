import { arenaModel } from "../models/arenaModel.js";

async function getArena() {
  return await arenaModel.getArena();
}

async function getArenaById(id) {
  if (!id) throw new Error("ID não fornecido");
  return await arenaModel.getArenaById(id);
}

async function createArena(nome, telefone, endereco, slug) {
  return await arenaModel.createArena(nome, telefone, endereco, slug);
}

export const arenaServices = {
  getArena,
  getArenaById,
  createArena
}
import { arenaModel } from "../models/arenaModel.js";

async function getArena() {
  return await arenaModel.getArena();
}

async function getArenaById(id) {
  if (!id) throw new Error("ID não fornecido");

  if (!isNaN(id)) {
    return await arenaModel.getArenaById(id);
  } else {
    return await arenaModel.getArenaBySlug(id);
  }
}

async function createArena(nome, telefone, endereco, slug) {
  return await arenaModel.createArena(nome, telefone, endereco, slug);
}

export const arenaServices = {
  getArena,
  getArenaById,
  createArena
}
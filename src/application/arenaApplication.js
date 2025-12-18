import { arenaServices } from "../services/arenaServices.js";

async function getArena() {
  return await arenaServices.getArena();
}

async function getArenaById(id) {
  return await arenaServices.getArenaById(id);
}

async function createArena(nome, telefone, endereco, slug) {
  return await arenaServices.createArena(nome, telefone, endereco, slug);
}

export const arenaApplication = {
  getArena,
  getArenaById,
  createArena
}
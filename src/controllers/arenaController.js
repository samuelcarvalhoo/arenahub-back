import { arenaApplication } from "../application/arenaApplication.js";

async function getArena(req, res) {
  try {
    const arenas = await arenaApplication.getArena();
    res.json(arenas);
  } catch (err) {
    console.error("Erro ao buscar arenas:", err);
    res.status(500).json({ error: "Arena não encon" });
  }
}

async function getArenaById(req, res) {
  const { id } = req.params;
  try {
    const arenas = await arenaApplication.getArenaById(id);
    res.json(arenas);
  } catch (err) {
    console.error("Erro ao buscar arenas:", err);
    res.status(500).json({ error: "Arena não encontrada" });
  }
}

async function createArena(req, res) {
  const { nome, telefone, endereco, slug } = req.body;
  try {
    const newArena = await arenaApplication.createArena(nome, telefone, endereco, slug);
    res.status(201).json(newArena);
  } catch (err) {
    console.error("Erro ao criar arena:", err);
    res.status(500).json({ error: "Erro ao criar arena" });
  }
}

export const arenaController = {
  getArena,
  getArenaById,
  createArena
};
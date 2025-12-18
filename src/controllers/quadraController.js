import { quadraApplication } from "../application/quadraApplication.js";

async function getQuadra(req, res) {
  try {
    const quadras = await quadraApplication.getQuadra();
    res.json(quadras);
  } catch (err) {
    console.error("Erro ao buscar quadras:", err);
    res.status(500).json({ error: "quadra não encon" });
  }
}

async function getQuadraById(req, res) {
  const { id } = req.params;
  try {
    const quadras = await quadraApplication.getQuadraById(id);
    res.json(quadras);
  } catch (err) {
    console.error("Erro ao buscar quadras:", err);
    res.status(500).json({ error: err.message });
  }
}

async function getQuadraByArenaId(req, res) {
  const { slug } = req.params;
  try {
    const quadras = await quadraApplication.getQuadraByArenaId(slug);
    res.json(quadras);
  } catch (err) {
    console.error("Erro ao buscar quadras:", err);
    res.status(500).json({ error: err.message });
  }
}

async function createQuadra(req, res) {
  const { nome, descricao, valor_hora, id_arena } = req.body;
  try {
    const newQuadra = await quadraApplication.createQuadra(nome, descricao, valor_hora, id_arena);
    res.status(201).json(newQuadra);
  } catch (err) {
    console.error("Erro ao criar quadra:", err);
    res.status(500).json({ error: "Erro ao criar quadra: " + err.message });
  }
}

async function updateQuadra(req, res) {
  const { id } = req.params;
  const { nome, descricao, valor_hora, id_arena } = req.body;
  try {
    const updatedQuadra = await quadraApplication.updateQuadra(id, nome, descricao, valor_hora, id_arena);
    res.json(updatedQuadra);
  } catch (err) {
    console.error("Erro ao atualizar quadra:", err);
    res.status(500).json({ error: "Erro ao atualizar quadra: " + err.message });
  }
}

async function deleteQuadra(req, res) {
  const { id } = req.params;
  try {
    await quadraApplication.deleteQuadra(id);
    res.status(204).send();
  } catch (err) {
    console.error("Erro ao deletar quadra:", err);
    res.status(500).json({ error: "Erro ao deletar quadra: " + err.message });
  }
}

export const quadraController = {
  getQuadra,
  getQuadraById,
  getQuadraByArenaId,
  createQuadra,
  updateQuadra,
  deleteQuadra
};
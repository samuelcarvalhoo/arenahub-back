import { horarioApplication } from "../application/horarioApplication.js";

async function getHorario(req, res) {
  try {
    const horarios = await horarioApplication.getHorario();
    res.json(horarios);
  } catch (err) {
    console.error("Erro ao buscar horários:", err);
    res.status(500).json({ error: "Horário não encontrado" });
  }
}

async function getHorarioByArenaId(req,res){
  const {id, dia} = req.params;
  try {
    const horarios = await horarioApplication.getHorarioByArenaId(id, dia);
    res.json(horarios);
  } catch (err) {
    console.error("Erro ao buscar horários:", err);
    res.status(500).json({ error: "Horário não encontrado" });
  }
}

async function createHorario(req, res) {
  try {
    const { id_arena, dia, abertura, fechamento } = req.body;
    const novoHorario = await horarioApplication.createHorario( id_arena, dia, abertura, fechamento );
    res.status(201).json(novoHorario);
  } catch (err) {
    console.error("Erro ao criar horário:", err);
    res.status(500).json({ error: err.message || "Erro ao criar horário" });
  }
}

async function deleteHorario(req, res) {
  try {
    const { id_arena, dia } = req.params;
    await horarioApplication.deleteHorario(id_arena, dia);
    res.status(200).json({ message: "Horário deletado com sucesso" });
  } catch (err) {
    console.error("Erro ao deletar horário:", err);
    res.status(500).json({ error: err.message || "Erro ao deletar horário" });
  }
}

async function updateHorario(req, res) {
  try {
    const { id_arena, dia, abertura, fechamento } = req.body;
    const horarioAtualizado = await horarioApplication.updateHorario(id_arena, dia, abertura, fechamento);
    res.status(200).json(horarioAtualizado);
  } catch (err) {
    console.error("Erro ao atualizar horário:", err);
    res.status(500).json({ error: err.message || "Erro ao atualizar horário" });
  }
}

export const horarioController = {
  getHorario,
  getHorarioByArenaId,
  createHorario,
  deleteHorario,
  updateHorario
};
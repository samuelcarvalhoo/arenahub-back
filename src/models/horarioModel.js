import { supabase } from "../config/supabaseClient.js";

async function getHorario() {
  const { data, error } = await supabase
    .from("tb_horario_func")
    .select("*");

  if (error) {
    throw error;
  }
  return data;
}

async function getHorarioByArenaId(id, dia) {
  const { data, error } = await supabase
    .from("tb_horario_func")
    .select("dia , abertura, fechamento")
    .eq("id_arena", id)
    .eq("dia", dia);

  if (error) {
    throw error;
  }
  return data;
}

async function createHorario(id_arena, dia, abertura, fechamento) {
  const { data, error } = await supabase
    .from("tb_horario_func")
    .insert({
      id_arena: id_arena,
      dia: dia,
      abertura: abertura,
      fechamento: fechamento
    })
    .select();

  if (error) {
    throw error;
  }
  return data;
}

async function deleteHorario(id_arena, dia) {
  const { error } = await supabase
    .from("tb_horario_func")
    .delete()
    .eq("id_arena", id_arena)
    .eq("dia", dia);

  if (error) {
    throw error;
  }
}

async function updateHorario(id_arena, dia, abertura, fechamento) {
  const { data, error } = await supabase
    .from("tb_horario_func")
    .update({ 
      abertura: abertura, 
      fechamento: fechamento })
    .eq("id_arena", id_arena)
    .eq("dia", dia)
    .select();

  if (error) {
    throw error;
  }
  return data;
}

export const horarioModel = {
  getHorario,
  getHorarioByArenaId,
  createHorario,
  deleteHorario,
  updateHorario
}
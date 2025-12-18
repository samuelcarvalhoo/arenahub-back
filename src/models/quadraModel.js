import { supabase } from "../config/supabaseClient.js";

async function getQuadra() {
  const { data, error } = await supabase
    .from("tb_quadra")
    .select("*");

  if (error) {
    throw error;
  }
  return data;
}

async function getQuadraById(id) {
  const { data, error } = await supabase
    .from("tb_quadra")
    .select("*")
    .eq("id_quadra", id)
    .maybeSingle();

  if (error) {
    throw error;
  }
  return data;
}

async function getQuadraByArenaId(slug) {
  const { data, error } = await supabase
    .from('tb_quadra')
    .select('*, tb_arena!inner(slug)')
    .eq("tb_arena.slug", slug);

  if (error) {
    throw error;
  }
  return data;
}

async function createQuadra(nome, descricao, valor_hora, id_arena) {
  const { data, error } = await supabase
    .from("tb_quadra")
    .insert({
      nome: nome,
      descricao: descricao,
      valor_hora: valor_hora,
      id_arena: id_arena
    })
    .select()
    .single();

  if (error) {
    throw error;
  }
  return data;
}

async function updateQuadra(id, nome, descricao, valor_hora, id_arena) {
  const { data, error } = await supabase
    .from("tb_quadra")
    .update({
      nome: nome,
      descricao: descricao,
      valor_hora: valor_hora,
      id_arena: id_arena
    })
    .eq("id_quadra", id)
    .select()
    .single();

  if (error) {
    throw error;
  }
  return data;
}

async function deleteQuadra(id) {
  const { data, error } = await supabase
    .from("tb_quadra")
    .delete()
    .eq("id_quadra", id)
    .select();

  if (error) {
    throw error;
  }
  return data;
}

export const quadraModel = {
  getQuadra,
  getQuadraById,
  getQuadraByArenaId,
  createQuadra,
  updateQuadra,
  deleteQuadra
}
import { supabase } from "../config/supabaseClient.js";

async function getArena() {
  const { data, error } = await supabase
    .from("tb_arena")
    .select("*");

  if (error) {
    throw error;
  }
  return data;
}

async function getArenaById(id) {
  const { data, error } = await supabase
    .from("tb_arena")
    .select("*")
    .eq("id", id);

  if (error) {
    throw error;
  }
  return data;
}

async function createArena(nome, telefone, endereco, slug) {
  const { data, error } = await supabase
    .from("tb_arena")
    .insert({
      nome: nome,
      telefone: telefone,
      endereco: endereco,
      slug: slug
    })
    .select()

  if (error) {
    throw error;
  }
  return data;
}

async function getArenaBySlug(slug) {
  const { data, error } = await supabase
    .from("tb_arena")
    .select("*")
    .eq("slug", slug);

  if (error) {
    throw error;
  }
  return data;
}

export const arenaModel = {
  getArena,
  getArenaById,
  createArena,
  getArenaBySlug
}
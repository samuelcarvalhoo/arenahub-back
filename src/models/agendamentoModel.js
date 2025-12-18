import { supabase } from "../config/supabaseClient.js";

async function getAgendamento() {
  const { data, error } = await supabase
    .from("tb_agendamentos")
    .select("*");

  if (error) {
    throw error;
  }
  return data;
}

async function getAgendamentoByQuadraAndDate(id_quadra , date) {
  const { data, error } = await supabase
    .from("tb_agendamentos")
    .select("inicio, fim, status")
    .eq("id_quadra", id_quadra)
    .eq("dia", date)
    .eq("status", 'agendado');

  if (error) {
    throw error;
  }
  return data;
}

async function createAgendamento(id_quadra, id_cliente, dia, inicio, fim, valor_total){
  console.log("INSERT PARAMS:", {
    id_quadra,
    id_cliente,
    dia,
    inicio,
    fim,
    valor_total
  });

  const {data, error} = await supabase
    .from("tb_agendamentos")
    .insert({
      id_quadra: id_quadra,
      id_cliente: id_cliente,
      dia: dia,
      inicio: inicio,
      fim: fim,
      valor_total: valor_total,
      status: 'agendado'
    })
    .select();

  if(error){
    throw error;
  }
  return data;
}

async function findConflitos(id_quadra, dia, inicio, fim) {
  const { data, error } = await supabase
    .from("tb_agendamentos")
    .select("*")
    .eq("id_quadra", id_quadra)
    .eq("dia", dia)
    .lt("inicio", fim)
    .gt("fim", inicio);

  if (error) throw error;

  return data;
}

async function getAgendamentoConcluido(id){
  const { data, error } = await supabase
    .from("tb_agendamentos")
    .select("*")
    .eq("id_quadra", id)
    .eq("status", 'concluido');

  if (error) throw error;

  return data;
}

async function deleteAgendamento(id) {
  const { data, error } = await supabase
    .from("tb_agendamentos")
    .delete()
    .eq("id", id)
    .select();

  if (error) throw error;
  return data;
}

async function getByUser(id) {
  const { data, error } = await supabase
  .from("tb_agendamentos")
  .select("*")
  .eq("id_cliente", id);

  if (error) throw error;
  return data;
}

export const agendamentoModel = {
  getAgendamento,
  getAgendamentoByQuadraAndDate,
  createAgendamento,
  findConflitos,
  getAgendamentoConcluido,
  deleteAgendamento,
  getByUser
}
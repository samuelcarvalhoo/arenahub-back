import { quadraModel } from "../models/quadraModel.js";

async function getQuadra() {
    return await quadraModel.getQuadra();
}

async function getQuadraById(id) {
    if (!id) throw new Error("ID não fornecido");
    const quadra = await quadraModel.getQuadraById(id);
    if (!quadra) throw new Error("Quadra não encontrada");
    return quadra;
}

async function getQuadraByArenaId(slug) {
    if (!slug) throw new Error("Slug não fornecido");
    const quadra = await quadraModel.getQuadraByArenaId(slug);
    if (quadra.length == 0) throw new Error("Nenhuma quadra encontrada para a arena fornecida");
    return quadra;
}

async function createQuadra(nome, descricao, valor_hora, id_arena) {
    return await quadraModel.createQuadra(nome, descricao, valor_hora, id_arena);
}

async function updateQuadra(id, nome, descricao, valor_hora, id_arena) {
    if (!id) throw new Error("ID não fornecido");
    return await quadraModel.updateQuadra(id, nome, descricao, valor_hora, id_arena);
}

async function deleteQuadra(id) {
    if (!id) throw new Error("ID não fornecido");
    return await quadraModel.deleteQuadra(id);
}

export const quadraServices = {
    getQuadra,
    getQuadraById,
    getQuadraByArenaId,
    createQuadra,
    updateQuadra,
    deleteQuadra
}
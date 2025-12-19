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

async function getQuadraByArenaId(identifier) {
    if (!identifier) throw new Error("Identificador (ID ou Slug) não fornecido");

    let quadra;

    if (!isNaN(identifier)) {
        quadra = await quadraModel.getQuadraByArenaNumericId(identifier);
    } else {
        quadra = await quadraModel.getQuadraByArenaId(identifier);
    }

    if (quadra.length == 0) {
        return [];
    }
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
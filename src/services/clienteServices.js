import { clienteModel } from "../models/clienteModel.js";

async function loginCliente(email, senha) {
    if (!email || !senha) {
        throw new Error("Email e senha são obrigatórios.");
    }
    return await clienteModel.loginCliente(email, senha);
}

async function createCliente(email, senha, nome, telefone) {
    if (!email || !senha) {
        throw new Error("Email e senha são obrigatórios.");
    }
    // Aqui você pode adicionar validações extras
    return await clienteModel.createCliente(email, senha, nome, telefone);
}

export const clienteServices = {
    loginCliente,
    createCliente,
};

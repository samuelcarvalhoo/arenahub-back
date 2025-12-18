import { clienteServices } from "../services/clienteServices.js";

async function loginCliente(email, senha) {
    return await clienteServices.loginCliente(email, senha);
}

async function createCliente(email, senha, nome, telefone) {
    return await clienteServices.createCliente(email, senha, nome, telefone);
}

export const clienteApplication = {
    loginCliente,
    createCliente,
};

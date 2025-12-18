import { clienteApplication } from "../application/clienteApplication.js";

async function loginCliente(req, res) {
    const { email, senha } = req.body;
    try {
        const data = await clienteApplication.loginCliente(email, senha);
        res.status(200).json(data);
    } catch (err) {
        console.error("Erro ao realizar login:", err);
        res.status(401).json({ error: err.message || "Erro ao realizar login" });
    }
}



async function createCliente(req, res) {
    const { email, senha, nome, telefone } = req.body;
    try {
        const data = await clienteApplication.createCliente(email, senha, nome, telefone);
        res.status(201).json(data);
    } catch (err) {
        console.error("Erro ao criar cliente:", err);
        res.status(400).json({ error: err.message || "Erro ao criar cliente" });
    }
}

export const clienteController = {
    loginCliente,
    createCliente
};

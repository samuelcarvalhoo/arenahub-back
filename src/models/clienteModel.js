import { supabase } from "../config/supabaseClient.js";

async function loginCliente(email, senha) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: senha,
    });

    if (error) {
        throw error;
    }
    return data;
}

async function createCliente(email, senha, nome, telefone) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: senha,
        options: {
            data: {
                nome: nome,
                telefone: telefone
            }
        }
    });

    if (error) {
        throw error;
    }

    const userId = data.user?.id;
    if (!userId) throw new Error("ID do usuário não encontrado após cadastro.");

    const { error: dbError } = await supabase
        .from('tb_clientes')
        .insert([
            { 
                id_auth: userId,
                nome: nome, 
                email: email ,
                telefone: telefone
            }
        ]);

    if (dbError) throw dbError;


    return data;
}

export const clienteModel = {
    loginCliente,
    createCliente,
};

import { supabase } from "../config/supabaseClient.js";
import { createClient } from "@supabase/supabase-js";

async function loginCliente(email, senha) {
    const tempSupabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY,
        {
            auth: {
                persistSession: false
            }
        }
    );

    const { data, error } = await tempSupabase.auth.signInWithPassword({
        email: email,
        password: senha,
    });

    if (error) {
        throw error;
    }

    const { data: clienteData, error: clienteError } = await supabase
        .from('tb_clientes')
        .select('*')
        .eq('id_auth', data.user.id)
        .single();

    if (clienteError) {
        console.error("Erro ao buscar dados do cliente:", clienteError);
    }

    return { ...data, cliente: clienteData };
}

async function createCliente(email, senha, nome, telefone) {
    try {
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

        if (error) throw error;

        const userId = data.user?.id;
        if (!userId) throw new Error("ID do usuário não encontrado após cadastro.");

        // Check if user already exists in tb_clientes to avoid duplication crash
        const { data: existingClient } = await supabase
            .from('tb_clientes')
            .select('id')
            .eq('id_auth', userId);

        if (existingClient && existingClient.length > 0) {
            throw new Error("Cliente já cadastrado para este usuário.");
        }

        const { data: newClientData, error: dbError } = await supabase
            .from('tb_clientes')
            .insert([
                {
                    id_auth: userId,
                    nome: nome,
                    email: email,
                    telefone: telefone
                }
            ])
            .select()
            .single();

        if (dbError) throw dbError;

        return { ...data, cliente: newClientData };
    } catch (err) {
        console.error("Error in createCliente model:", err);
        throw err;
    }
}

export const clienteModel = {
    loginCliente,
    createCliente,
};

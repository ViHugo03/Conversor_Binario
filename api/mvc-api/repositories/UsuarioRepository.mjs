import Usuario from '../models/Usuario.mjs';

export async function login(usuario) {
    try {
        const usuarioAutenticado = await Usuario.findOne({ where: { email: usuario.email, senha: usuario.senha } });
        return usuarioAutenticado;
    } catch (error) {
        throw new Error("Erro ao autenticar o usuário: " + error.message);
    }
}

export async function cadastro(usuario) {
    try {
        const usuarioCadastrado = await Usuario.create(usuario);
        return usuarioCadastrado;
    } catch (error) {
        return "Erro ao cadastrar o usuário";
    }
}

export async function validarExistente(email) {
    try {
        const usuario = await Usuario.findOne({ where: { email: email } });
        return usuario;
    } catch (error) {
        return null;
    }
}
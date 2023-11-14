import * as UsuarioRepository from '../repositories/UsuarioRepository.mjs';

export async function login(req, res) {
    try {
        const usuario = req.body;
        let emailRegex = /^.+@.+\..+$/;
        if (!emailRegex.test(usuario.email)) {
            return res.status(400).send("O campo email é inválido");
        }
        if (!usuario.senha) {
            return res.status(400).send("O campo senha é obrigatório");
        }
        const usuarioAutenticado = await UsuarioRepository.login(usuario);
        if (!usuarioAutenticado) {
            return res.status(401).json("Usuário ou senha inválidos");
        }
        res.status(200).json(usuarioAutenticado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function cadastro(req, res) {
    try {
        const usuario = req.body;
        let emailRegex = /^.+@.+\..+$/;

        if (!usuario.nome || usuario.nome.trim() === '') {
            return res.status(400).send("O campo nome é obrigatório");
        }
        if (usuario.nome.length < 3) {
            return res.status(400).send("O campo nome deve ter no mínimo 3 caracteres");
        }
        if (!emailRegex.test(usuario.email)) {
            return res.status(400).send("O campo email é inválido");
        }
        if (!usuario.senha) {
            return res.status(400).send("O campo senha é obrigatório");
        }
        if (usuario.senha.length < 6) {
            return res.status(400).send("A senha deve ter no mínimo 6 caracteres");
        }

        let senhaHex = '';
        for (let i = 0; i < usuario.senha.length; i++) {
            let ascii = usuario.senha.charCodeAt(i);
            let hex = ascii.toString(16);
            senhaHex += hex;
        }

        const usuarioSalvar = {
            nome: usuario.nome,
            email: usuario.email,
            senha: senhaHex
        };

        const usuarioExistente = await UsuarioRepository.validarExistente(usuario.email);

        if (!usuarioExistente) {
            const usuarioCadastrado = await UsuarioRepository.cadastro(usuarioSalvar);
            return res.status(201).json(usuarioCadastrado);
            
        } else {
            return res.status(409).json("Usuário já cadastrado");
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

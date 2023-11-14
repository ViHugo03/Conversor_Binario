import * as ConversaoRepository from "../repositories/ConversaoRepository.mjs"
import Conversao from "../models/Conversao.mjs";

export async function listarConversoes(req, res) {
    try {
        const conversoes = await ConversaoRepository.listarConversoes();
        res.status(200).json(conversoes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function salvarConversao(req, res) {
    try {
        const conversao = req.body;

        // Supondo que ConversaoRepository tenha um método para verificar se já existe um registro
        const conversaoExistente = await ConversaoRepository.verificarExistencia(conversao.decimal);

        if (conversaoExistente) {
            // Se já existir uma conversão com esse número, não faz nada
            res.status(409).json({ message: "Conversão já existe no banco de dados." });
        } else {
            // Se não existir, salva a nova conversão
            await Conversao.create(conversao);
            res.status(201).json(conversao);
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


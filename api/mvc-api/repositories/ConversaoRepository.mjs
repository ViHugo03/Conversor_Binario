import Conversao from "../models/Conversao.mjs";

export async function listarConversoes() {
    return await Conversao.findAll();
}

export async function salvarConversao(conversao) {
    return await Conversao.create(conversao);
}

export async function verificarExistencia(decimal) {
    try {
      const conversao = await Conversao.findOne({ where: { decimal: decimal } });
      return conversao !== null;
    } catch (error) {
      throw new Error("Erro ao verificar a existência da conversão: " + error.message);
    }
  }
import Conversao from '../../models/conversao'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const conversao = await Conversao.findAll();
      return res.status(200).json(conversao);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const { decimal, octal, hexadecimal, binario } = req.body;
      const conversao = await Conversao.create({
        decimal,
        octal,
        hexadecimal,
        binario,
      });
      return res.status(201).json(conversao);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

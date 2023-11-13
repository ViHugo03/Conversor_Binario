import express from "express";
import * as ConversaoController from '../controller/ConversaoController.mjs';

const ConversaoRouter = express.Router();

ConversaoRouter.get('/', (req, res) => {
    ConversaoController.listarConversoes(req, res);
});


ConversaoRouter.post('/', (req, res) => {
    ConversaoController.salvarConversao(req, res);
}
);

export default ConversaoRouter;
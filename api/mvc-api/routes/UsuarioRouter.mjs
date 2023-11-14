import express from "express";
import * as UsuarioController from '../controller/UsuarioController.mjs';

const UsuarioRouter = express.Router();

UsuarioRouter.post('/login', (req, res) => {
    UsuarioController.login(req, res);
});

UsuarioRouter.post('/', (req, res) => {
    UsuarioController.cadastro(req, res);
});


export default UsuarioRouter;


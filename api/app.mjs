import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import ConversaoRouter from './mvc-api/routes/ConversaoRouter.mjs';
import UsuarioRouter from './mvc-api/routes/UsuarioRouter.mjs';

config();
const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/conversao', ConversaoRouter);
app.use('/usuario', UsuarioRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});
import express, { json } from 'express'
import { authenticateUser } from './controllers/login.controller';
import dotenv from 'dotenv';
import cors from 'cors';
import { routes } from './routes/index.routes';

const app = express();
dotenv.config({path:`.env.${process.env.NODE_ENV}`});

const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} en el ambiente de ${process.env.ENVIRONMENT}`);
});
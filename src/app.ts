import express, { json } from 'express'
import { authenticateUser } from './controllers/login.controller';
import dotenv from 'dotenv';

dotenv.config({path:`.env.${process.env.NODE_ENV}`});

const app = express();

const port = process.env.PORT || '5555';
const host = process.env.HOST || '0.0.0.0';

app.use(json());
app.post('/login', authenticateUser);

app.listen({port: port, host: host}, () => {
    console.log("Servidor corriendo en el puerto " + port)
});
import express, { json } from 'express'
import { authenticateUser } from './controllers/login.controller';
import dotenv from 'dotenv';

dotenv.config({path:`.env.${process.env.NODE_ENV}`});
console.log("process.env.DB_HOST", process.env.DB_HOST);
console.log("process.env.DB_NAME", process.env.DB_NAME);
console.log("process.env.DB_PORT", process.env.DB_PORT);
console.log("process.env.DB_USER", process.env.DB_USER);
console.log("process.env.DB_PASSWORD", process.env.DB_PASSWORD);
const app = express();

const port = process.env.PORT;
const host = process.env.HOST;

app.use(json());
app.post('/login', authenticateUser);

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto " + port)
});
import express, { json } from 'express'
import { authenticateUser } from './controllers/login.controller';

const app = express();

const port = process.env.PORT || '5555';
const host = process.env.HOST || '0.0.0.0';

app.use(json());
app.post('/login', authenticateUser);

app.listen(port, ()=>{
    console.log("Servidor corriendo en el puerto " + port)
});
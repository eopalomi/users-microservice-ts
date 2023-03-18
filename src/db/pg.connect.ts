import { Pool } from "pg";
import dotenv from 'dotenv';

dotenv.config({path:`.env.${process.env.NODE_ENV}`});

const pool = new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT!),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: false
});

export const execQuery = (query:string, params: any ) => {
    return pool.query(query, params);
};

//export default {execQuery};
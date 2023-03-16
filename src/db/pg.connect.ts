import { Pool } from "pg";

const pool = new Pool({
    host: '165.227.68.255',
    database: 'frame',
    port: 5438,
    user: 'root',
    password: 'root',
    ssl: false
});

export const execQuery = (query:string, params: any ) => {
    return pool.query(query, params);
};

//export default {execQuery};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execQuery = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    host: '165.227.68.255',
    database: 'frame',
    port: 5438,
    user: 'root',
    password: 'root',
    ssl: false
});
const execQuery = (query, params) => {
    return pool.query(query, params);
};
exports.execQuery = execQuery;
//export default {execQuery};

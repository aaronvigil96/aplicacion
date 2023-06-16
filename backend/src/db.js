import 'dotenv/config';
import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: process.env.HOST,
    user: process.env.USERDB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORTDB
});
import { pool } from "../db.js";   

export const usersServices = {
    getAll: async () => {
        const result = await pool.query("SELECT * FROM users");
        return result[0];
    },
    getOne: async (name) => {
        const result = await pool.query(`SELECT * FROM users WHERE name LIKE ?`, [`%${name}%`]);
        return result[0];
    },
    create: async (name) => {
        const result = await pool.query(`INSERT INTO users(name) VALUES ${name}`);
        return result[0];
    },
    update: () => {

    },
    delete: () => {

    }
}
import 'dotenv/config'
import pg from 'pg'
const { Pool } = pg

const connectionString = process.env.CONNECTION_STRING_URL

export const pool = new Pool({
    connectionString,
    allowExitOnIdle: true
})

try {
    await pool.query('SELECT NOW()')
    console.log("Base de Datos conectada!") // Hello world!
} catch (err) {
    console.error(err);
}
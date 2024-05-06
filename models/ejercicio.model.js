import { pool } from '../database/connection.js'

const findAll = async () => {
    const { rows } = await pool.query('SELECT * FROM EJERCICIOS')
    return rows
}

const create = async ({ nombre, series, repeticiones, descanso }) => {
    const query = {
        text: `INSERT INTO EJERCICIOS (NOMBRE, SERIES, REPETICIONES, DESCANSO)
        VALUES ($1, $2, $3, $4) RETURNING *`,
        values: [nombre, series, repeticiones, descanso]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}

const remove = async (nombre) => {
    const query = {
        text: `
        DELETE FROM EJERCICIOS WHERE NOMBRE = $1
        RETURNING *
        `,
        values: [nombre]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const update = async ({ nombre, series, repeticiones, descanso }) => {
    const query = {
        text: `UPDATE EJERCICIOS SET
        NOMBRE = $1,
        SERIES = $2,
        REPETICIONES = $3,
        DESCANSO = $4
        WHERE NOMBRE = $1
        RETURNING *`,
        values: [nombre, series, repeticiones, descanso]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}

export const Ejercicio = {
    findAll,
    create,
    remove,
    update
}
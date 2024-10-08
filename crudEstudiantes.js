const conexion = require("./conexion")

const findAll = async () => {
    const pool = conexion();
    await pool.connect();
    const estudiantes = await pool.query('SELECT * FROM estudiante');
    console.log(estudiantes);
}

const findByRut = async (rut) => {
    const pool = conexion();
    await pool.connect();
    const query = {
        text: 'SELECT * FROM estudiante WHERE rut = $1',
        values: [rut]
    }
    const estudiantes = await pool.query(query);
    console.log(estudiantes);
}

const insert = async (rut, nombre, curso, nivel) => {
    const pool = conexion();
    await pool.connect();
    const query = {
        text: 'INSERT INTO estudiante(rut, nombre, curso, nivel) VALUES ($1, $2, $3, $4)',
        values: [rut, nombre, curso, nivel]
    }
    const estudiantes = await pool.query(query);
    console.log(estudiantes);
}

const update = async (rut, nombre, curso, nivel) => {
    const pool = conexion();
    await pool.connect();
    const query = {
        text: 'UPDATE estudiante SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4',
        values: [nombre, curso, nivel, rut]
    }
    const estudiantes = await pool.query(query);
    console.log(estudiantes);
}

const deleteByRut = async (rut) => {
    const pool = conexion();
    await pool.connect();
    const query = {
        text: 'DELETE FROM estudiante WHERE rut = $1',
        values: [rut]
    }
    const estudiantes = await pool.query(query);
    console.log(estudiantes);
}

module.exports = {
    findAll,
    findByRut,
    insert,
    update,
    deleteByRut
}
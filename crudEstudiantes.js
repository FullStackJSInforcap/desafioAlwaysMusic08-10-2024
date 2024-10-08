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
    const estudiantes = await pool.query(`SELECT * FROM estudiante WHERE rut = '${rut}'`);
    console.log(estudiantes);
}

const insert = async (rut, nombre, curso, nivel) => {
    const pool = conexion();
    await pool.connect();
    const estudiantes = await pool.query(`INSERT INTO estudiante(rut, nombre, curso, nivel) VALUES ('${rut}', '${nombre}', '${curso}', ${nivel})`);
    console.log(estudiantes);
}

const update = async (rut, nombre, curso, nivel) => {
    const pool = conexion();
    await pool.connect();
    const estudiantes = await pool.query(`UPDATE estudiante SET nombre = '${nombre}', curso = '${curso}', nivel = ${nivel} WHERE rut = '${rut}'`);
    console.log(estudiantes);
}

const deleteByRut = async (rut) => {
    const pool = conexion();
    await pool.connect();
    const estudiantes = await pool.query(`DELETE FROM estudiante WHERE rut = '${rut}'`);
    console.log(estudiantes);
}

module.exports = {
    findAll,
    findByRut,
    insert,
    update,
    deleteByRut
}
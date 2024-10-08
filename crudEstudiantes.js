const conexion = require("./conexion")

const findAll = async () => {
    const pool = conexion();
    await pool.connect();
    const estudiantes = await pool.query('SELECT * FROM estudiante');
    console.log(estudiantes);
}

module.exports = {
    findAll
}
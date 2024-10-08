const { Pool } = require('pg');

const conexion = () => {
    return new Pool({
        host: '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: 'root',
        database: 'music'
    });
}

module.exports = conexion;
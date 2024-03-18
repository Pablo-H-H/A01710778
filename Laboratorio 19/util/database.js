const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'alckaleo',
    password: 'Trucopablo11'
});

module.exports = pool.promise();
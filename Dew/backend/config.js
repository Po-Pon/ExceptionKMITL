const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'exceptionkmitl',
  waitForConnections: true,
  connectionLimit: 0,
  queueLimit: 0
});

module.exports = pool;
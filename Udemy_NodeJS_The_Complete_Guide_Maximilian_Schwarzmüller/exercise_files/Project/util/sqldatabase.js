const mysql = require('mysql2');

const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.MYSQL_USER,
	database: process.env.MYSQL_DB,
	password: process.env.MYSQL_PASS,
});

module.exports = pool.promise();

// -> #1. CORE MYSQL DB SERVER
// const mysql = require('mysql2');

// const pool = mysql.createPool({
// 	host: process.env.DB_HOST,
// 	user: process.env.MYSQL_USER,
// 	database: process.env.MYSQL_DB,
// 	password: process.env.MYSQL_PASS,
// });

// module.exports = pool.promise();

// -> #2. SEQUELIZE DB SERVER
const Sequelize = require('sequelize');

// Create a Sequelize DB instance
const sequelize = new Sequelize(
	process.env.MYSQL_DB, // Database name
	process.env.MYSQL_USER, // Mysql user name
	process.env.MYSQL_PASS, // Mysql password
	{
		dialect: 'mysql', // Select a sql engine 'postgres', 'sqlite', etc
		host: process.env.DB_HOST, // Mysql host
	} // Options
);

module.exports = sequelize;

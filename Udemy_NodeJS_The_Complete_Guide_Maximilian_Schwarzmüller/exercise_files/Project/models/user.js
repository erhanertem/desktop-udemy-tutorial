const Sequelize = require('sequelize');

const sequelize = require('../util/sqldatabase');

const User = sequelize.define(
	'user', // Name of the data model
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	} // Define the structure of the user
);

module.exports = User;

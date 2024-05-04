const Sequelize = require('sequelize');

// Configura la conexión a la base de datos PostgreSQL
const sequelize = new Sequelize('Portfolio', 'caperucitorojo', 'sawamura', {
  host: '192.168.1.101',
  dialect: 'postgres',
});

module.exports = sequelize;

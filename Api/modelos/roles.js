const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

// Define el modelo para tu tabla en la base de datos
const Roles = sequelize.define('Roles', {
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID al crear un registro
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Roles;
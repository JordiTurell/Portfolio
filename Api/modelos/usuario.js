const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

// Define el modelo para tu tabla en la base de datos
const Usuarios = sequelize.define('Usuarios', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID al crear un registro
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pass: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idrol: {
        type: DataTypes.UUID,
        allowNull: true
    },
});

module.exports = Usuarios;
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

// Define el modelo para tu tabla en la base de datos
const Proyectos = sequelize.define('Proyectos', {
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID al crear un registro
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ghost: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});

module.exports = Proyectos;
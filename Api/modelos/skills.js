const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

// Define el modelo para tu tabla en la base de datos
const Skills = sequelize.define('Skills', {
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID al crear un registro
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    porcentage: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ghost: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});

module.exports = Skills;
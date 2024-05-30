const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

// Define el modelo para tu tabla en la base de datos
const ProyectosSkills = sequelize.define('ProyectosSkills', {
    id: {
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID al crear un registro
        primaryKey: true
    },
    idproyecto: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    idskill: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
});

module.exports = ProyectosSkills;
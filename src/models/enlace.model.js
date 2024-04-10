const { Sequelize,DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Enlace = sequelize.define('Enlace', {

  idEnlace: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },

  nombre: {
    type: DataTypes.STRING(40)
  },

  apellidoP: {
    type: DataTypes.STRING(30)
  },

  apellidoM: {
    type: DataTypes.STRING(30)
  },

  correo: {
    type: DataTypes.STRING(80)
  },

  telefono: {
    type: DataTypes.STRING(15)
  },

  idDependencia: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  idDireccion: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  idDepartamento: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idCargo:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Enlace;

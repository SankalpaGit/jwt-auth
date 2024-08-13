const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gmail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // Ensures the field contains a valid email address
    },
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, // Default value is false for regular users
  },
}, {
});

module.exports = User;

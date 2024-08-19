// models/Book.js

const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Ensure this path points to your models/index.js file

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  publishedDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'available',
  },
  images: {
    type: DataTypes.STRING, // You can store image URLs as a string
  },
});

module.exports = Book;

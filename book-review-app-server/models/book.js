'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.Author, { foreignKey: 'author_id', as: 'author' });
      Book.hasMany(models.Review, { foreignKey: 'book_id', as: 'reviews' });
    }
  }
  Book.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    author_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Authors',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
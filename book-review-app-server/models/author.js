'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Author.hasMany(models.Book, { foreignKey: 'author_id', as: 'books' });
    }
  }

  Author.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true // Ensure the id column is unique
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Author',
    }
  );

  return Author;
};
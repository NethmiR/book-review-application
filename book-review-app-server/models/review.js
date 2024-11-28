'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define the associations here

      // A Review belongs to a Book
      Review.belongsTo(models.Book, { foreignKey: 'book_id', as: 'book' });

      // A Review belongs to a User
      Review.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
  }

  Review.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    description: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    status: DataTypes.STRING,
    book_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Books',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Review',
  });

  return Review;
};

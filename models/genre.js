'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  Genre.belongsToMany(models.Game, {
    through: models.GameGenre,
    foreignKey: 'genre_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });

    }
  }
  Genre.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};
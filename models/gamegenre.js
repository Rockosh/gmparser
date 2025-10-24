'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  GameGenre.belongsTo(models.Game, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });

  GameGenre.belongsTo(models.Genre, {
    foreignKey: 'genre_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });

    }
  }
  GameGenre.init({
    game_id: DataTypes.INTEGER,
    genre_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GameGenre',
  });
  return GameGenre;
};
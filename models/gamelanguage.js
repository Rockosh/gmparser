'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  GameLanguage.belongsTo(models.Game, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });

  GameLanguage.belongsTo(models.Language, {
    foreignKey: 'language_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });

    }
  }
  GameLanguage.init({
    game_id: DataTypes.INTEGER,
    language_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GameLanguage',
  });
  return GameLanguage;
};
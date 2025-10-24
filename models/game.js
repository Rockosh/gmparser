'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  Game.belongsTo(models.LauncherType, {
    foreignKey: 'launcher_type_id',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });

  Game.belongsTo(models.Developer, {
    foreignKey: 'developer_id',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });

  Game.belongsTo(models.Publisher, {
    foreignKey: 'publisher_id',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });

  Game.hasMany(models.SystemRequirement, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });

  Game.hasMany(models.Image, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });

  Game.belongsToMany(models.Genre, {
    through: models.GameGenre,
    foreignKey: 'game_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });

  Game.belongsToMany(models.Language, {
    through: models.GameLanguage,
    foreignKey: 'game_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });

    }
  }
  Game.init({
    title: DataTypes.STRING,
    max_players: DataTypes.INTEGER,
    singleplayer: DataTypes.BOOLEAN,
    launcher_type_id: DataTypes.INTEGER,
    developer_id: DataTypes.INTEGER,
    publisher_id: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};
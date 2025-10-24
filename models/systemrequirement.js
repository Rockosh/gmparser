'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SystemRequirement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  SystemRequirement.belongsTo(models.Game, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });

    }
  }
  SystemRequirement.init({
    game_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    cpu: DataTypes.STRING,
    gpu: DataTypes.STRING,
    ram: DataTypes.STRING,
    storage: DataTypes.STRING,
    os: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SystemRequirement',
  });
  return SystemRequirement;
};
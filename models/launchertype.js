'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LauncherType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  LauncherType.hasMany(models.Game, {
    foreignKey: 'launcher_type_id',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });

    }
  }
  LauncherType.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'LauncherType',
  });
  return LauncherType;
};
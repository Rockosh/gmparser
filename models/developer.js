'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Developer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  Developer.hasMany(models.Game, {
    foreignKey: 'developer_id',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
  });

    }
  }
  Developer.init({
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    website: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Developer',
  });
  return Developer;
};
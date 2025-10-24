'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  Language.belongsToMany(models.Game, {
    through: models.GameLanguage,
    foreignKey: 'language_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });

    }
  }
  Language.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Language',
  });
  return Language;
};
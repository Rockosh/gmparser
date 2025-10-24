'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  Image.belongsTo(models.Game, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });

    }
  }
  Image.init({
    game_id: DataTypes.INTEGER,
    image_url: DataTypes.TEXT,
    image_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
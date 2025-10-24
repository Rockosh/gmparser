'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SystemRequirements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      game_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Games',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      cpu: {
        type: Sequelize.STRING
      },
      gpu: {
        type: Sequelize.STRING
      },
      ram: {
        type: Sequelize.STRING
      },
      storage: {
        type: Sequelize.STRING
      },
      os: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SystemRequirements');
  }
};
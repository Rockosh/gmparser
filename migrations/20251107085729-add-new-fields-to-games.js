'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const table = 'Games';
    const columns = [
      { name: 'image', type: Sequelize.STRING },
      { name: 'max_players', type: Sequelize.INTEGER },
      { name: 'singleplayer', type: Sequelize.BOOLEAN },
      { name: 'launcher_type_id', type: Sequelize.INTEGER },
      { name: 'developer_id', type: Sequelize.INTEGER },
      { name: 'publisher_id', type: Sequelize.INTEGER },
    ];

    const tableDesc = await queryInterface.describeTable(table);

    for (const col of columns) {
      if (!tableDesc[col.name]) {
        await queryInterface.addColumn(table, col.name, { type: col.type });
        console.log(`✅ Добавлен столбец ${col.name}`);
      } else {
        console.log(`⚠️ Столбец ${col.name} уже существует — пропущен`);
      }
    }
  },

  async down(queryInterface) {
    const table = 'Games';
    const columns = [
      'image',
      'max_players',
      'singleplayer',
      'launcher_type_id',
      'developer_id',
      'publisher_id',
    ];

    const tableDesc = await queryInterface.describeTable(table);

    for (const name of columns) {
      if (tableDesc[name]) {
        await queryInterface.removeColumn(table, name);
        console.log(`🗑 Удалён столбец ${name}`);
      }
    }
  }
};

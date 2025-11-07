// business_logic.cjs
const { saveGames } = require('../data_acces/repository.cjs');

async function processGames(games) {
  // можно добавить фильтрацию или валидацию
  const filteredGames = games.filter(g => g.title && g.title !== 'Без названия');

  await saveGames(filteredGames);
}

module.exports = { processGames };

const db = require("../data/dbConfig");

module.exports = {
  findGames,
  insert
};
function findGames() {
  return db("games");
}

async function insert(game) {
  return db("games")
    .insert(game, "id")
    .then(([id]) => {
      return db("games")
        .where({ id })
        .first();
    });
}

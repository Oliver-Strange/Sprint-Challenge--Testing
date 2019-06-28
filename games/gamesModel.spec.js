const db = require("../data/dbConfig");
const Games = require("./gamesModel");

describe("games model", () => {
  beforeEach(() => {
    return db("games").truncate();
  });

  describe("insert()", () => {
    it("should insert the provided game into the db", async () => {
      await Games.insert({
        title: "zelda",
        genre: "console",
        releaseYear: "1990"
      });
      await Games.insert({ title: "halo", genre: "console" });

      const games = await db("games");
      expect(games).toHaveLength(2);
    });
  });

  describe("findGames()", () => {
    it("should return list of games", async () => {
      await Games.insert({
        title: "zelda",
        genre: "console",
        releaseYear: "1990"
      });
      await Games.insert({ title: "halo", genre: "console" });

      const games = await db("games");
      expect(games).toHaveLength(2);
    });
  });
});

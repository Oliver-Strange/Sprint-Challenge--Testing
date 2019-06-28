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
    xit("should return empty array", async () => {
      const game = await db("games");
      expect(game).toBe([]);
    });

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

  describe("remove()", () => {
    it("should remove game by id", async () => {
      await Games.insert({
        title: "zelda",
        genre: "console",
        releaseYear: "1990"
      });
      await Games.insert({ title: "halo", genre: "console" });
      await Games.remove(2);
      const games = await db("games");
      expect(games).toHaveLength(1);
    });
  });
});

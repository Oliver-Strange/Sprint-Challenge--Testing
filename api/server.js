const express = require("express");

const Games = require("../games/gamesModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "api running" });
});

server.get("/games", (req, res) => {
  Games.findGames()
    .then(games => {
      res.status(200).json(games);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post("/games", async (req, res) => {
  const game = req.body;
  if (game.title && game.genre) {
    try {
      const inserted = await Games.insert(game);
      res.status(201).json(inserted);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "server error" });
    }
  } else {
    res.status(400).json({ message: "provide title and genre" });
  }
});

module.exports = server;

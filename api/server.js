const express = require("express");

const Games = require("../games/gamesModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "api running" });
});

module.exports = server;

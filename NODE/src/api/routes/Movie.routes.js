const { createMovie } = require("../controllers/Movie.controllers");

const MovieRoutes = require("express").Router();

MovieRoutes.post("/", createMovie);

module.exports = MovieRoutes;

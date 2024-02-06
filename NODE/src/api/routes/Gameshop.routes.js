//Importamos createGameShop de controllers
const { createGameShop } = require("../controllers/Gameshop.controllers");

//Creo una nueva ruta para GameShop
const GameShopRoutes = require("express").Router();

//Genero el endpoint para el API
GameShopRoutes.post("/", createGameShop);

//Realizo la exportación
module.exports = GameShopRoutes;

const { upload } = require("../../middleware/files.middleware");

//Importamos createGameShop de controllers
const {
  createGameShop,
  toggleProduct,
  getById,
} = require("../controllers/Gameshop.controllers");

//Creo una nueva ruta para GameShop
const GameShopRoutes = require("express").Router();

//Genero el endpoint para el API
GameShopRoutes.post("/create", upload.single("image"), createGameShop);
GameShopRoutes.get("/:id", getById);
GameShopRoutes.patch("/add/:id", toggleProduct);

//Realizo la exportación
module.exports = GameShopRoutes;

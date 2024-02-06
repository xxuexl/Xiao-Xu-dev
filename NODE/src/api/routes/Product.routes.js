//Importamos createProduct de controllers
const { createProduct } = require("../controllers/Product.controllers");

//Creo una nueva ruta para Product
const ProductRoutes = require("express").Router();

//Genero el endpoint para el API
ProductRoutes.post("/", createProduct);

//Realizo la exportación
module.exports = ProductRoutes;

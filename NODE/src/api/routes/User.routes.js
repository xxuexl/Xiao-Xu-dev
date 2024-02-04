/*Nos importamos: */
const { upload } = require("../../middleware/files.middleware");
const { registerLargo, register } = require("../controllers/User.controllers");
const express = require("express");
const UserRoutes = express.Router();

UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);
UserRoutes.post("/registerUtil", upload.single("image"), register);

/// ------------------> rutas que pueden ser redirect
//UserRoutes.get("/register/sendMail/:id", sendCode); // :id ---> es el nombre del param
module.exports = UserRoutes; //Configurar la ruta
//Tiene que pasar por el middleware la parte con "upload.single"

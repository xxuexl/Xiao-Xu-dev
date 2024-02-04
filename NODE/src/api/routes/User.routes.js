/*Nos importamos: */
const { upload } = require("../../middleware/files.middleware");
const {
  registerLargo,
  register,
  registerWithRedirect,
  login,
} = require("../controllers/User.controllers");
const express = require("express");
const UserRoutes = express.Router();
/* require -> Pulls an external package into the project. */

/* Cuando una Http post request es realizada al endpoint "registerLargo",
ejecutará la acción de upload y ejecuta la función que aparece al final. */
UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);

UserRoutes.post("/registerUtil", upload.single("image"), register);
UserRoutes.get("/register", upload.single("image"), registerWithRedirect);
UserRoutes.post("/login", login);
/// ------------------> rutas que pueden ser redirect

//UserRoutes.get("/register/sendMail/:id", sendCode); // :id ---> es el nombre del param
module.exports = UserRoutes; //Configurar la ruta
//Tiene que pasar por el middleware la parte con "upload.single"

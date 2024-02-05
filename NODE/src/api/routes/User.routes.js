/*Nos importamos: */
const { upload } = require("../../middleware/files.middleware");
const {
  registerLargo,
  register,
  registerWithRedirect,
  resendCode,
  sendCode,
  checkNewUser,
  login,
  autoLogin,
} = require("../controllers/User.controllers");
const express = require("express"); //require ->Pulls an external package into the project
const UserRoutes = express.Router();

//! -------RUTAS--------- endPoints sin auth ---------------------------------------
/* Cuando una Http post request es realizada al endpoint "registerLargo",
ejecutará la acción de upload y ejecuta la función que aparece al final. */
UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);

UserRoutes.post("/registerUtil", upload.single("image"), register);
UserRoutes.post("/register", upload.single("image"), registerWithRedirect);
UserRoutes.post("/resend", resendCode);
UserRoutes.post("/check", checkNewUser);
UserRoutes.post("/login", login);
UserRoutes.post("/login/autologin", autoLogin);
//!UserRoutes.patch("/forgotpassword", changePassword);

/// ------------------> rutas que pueden ser redirect

UserRoutes.get("/register/sendMail/:id", sendCode); // :id ---> es el nombre del param
module.exports = UserRoutes;

//Configurar la ruta
//Tiene que pasar por el middleware la parte con "upload.single"

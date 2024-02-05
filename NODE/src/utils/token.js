const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Se genera token con el id y el email
const generateToken = (id, email) => {
  // Si no hay usuario o email lanza un error
  if (!id || !email) {
    throw new Error("Email or id are missing");
  }
  /*Si hay, se utiliza "sign".
  Sign solicita registrar jwt con el id e email y con la JWT SECRET
  y que expire en 1 día. */
  return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const verifyToken = (token) => {
  // si no nos envia el token mandamos un error
  if (!token) {
    throw new Error("Token is missing");
  }
  // llamamo a la funcion de verificar el token --> esta funcion se encuentra en util
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};

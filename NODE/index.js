//Todo acaba en este archivo, ya que es el más relevante.
//? Creamos nuestro servidor express

const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("./src/utils/db");
const { configCloudinary } = require("./src/middleware/files.middleware");
//Puedo poner funciones en estas llaves

// creamos el servidor web
const app = express();

// vamos a configurar dotenv para poder utilizar las variables d entorno del .env
dotenv.config();

//! conectamos con la base de datos
connect();

//! -----------------CONFIGURAR CLOUDINARY--------------------
configCloudinary(); // No olvidar los paréntesis.

//! -----------------VARIABLES CONSTANTES --> PORT

const PORT = process.env.PORT;

//! -----------------CORS--------------------------------------
// Cors está a la entrada.
const cors = require("cors");
app.use(cors());
//Meter configuración general. Del servidor que tiene meteme cors.

//! ------------------ limitaciones de cantidad en el back end
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

//! -----------------> RUTAS
const UserRoutes = require("./src/api/routes/User.routes");
app.use("/api/v1/users/", UserRoutes);

//! -------------------> generamos un error de cuando no see encuentre la ruta
app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});

//! ------------------> En caso de Crash en el servidor metemos un 500 ----------
//Error general en el servidor
app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});

//! ------------------ ESCUCHAMOS EN EL PUERTO EL SERVIDOR WEB-----

// esto de aqui  nos revela con que tecnologia esta hecho nuestro back
app.disable("x-powered-by");
app.listen(PORT, () =>
  console.log(`Server listening on port 👌🔍 http://localhost:${PORT}`)
);

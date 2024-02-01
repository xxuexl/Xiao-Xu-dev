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

//! ----------------- CONFIGURAR CLOUDINARY--------
configCloudinary(); // No olvidar los paréntesis.

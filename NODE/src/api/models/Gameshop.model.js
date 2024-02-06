const mongoose = require("mongoose");
//const cloudinary = require("cloudinary");

/* Schema --> Es como un template en una base de datos.
Es una colección lógica organizada de objetos de base de datos como
tablas, funciones...*/

/* Creamos un nuevo Schema de los productos que venden las tiendas.
Creamos un nuevo Schema de empresas/tiendas que venden productos
(principalmente juegos) de la librería mongoose que interactúa con Mongo DB. 

Creamos una nueva función a la que le pasamos un objeto con diferentes 
claves y atributos
*/
const ProductSchema = new mongoose.Schema({ name: String });
//Define

const GameShopSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    products: [ProductSchema], //el array de products
    favourite: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    year_founded: { type: Number, required: true },
    headquarters_location: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

/* El model es una representación estructurada de los datos que se 
utilizan. Crea un modelo basado en el esquema definido en la parte 
superior
GameShop es el modelo creado a partir de este esquema, con él se
pueden realizar operaciones CRUD. En paréntesis introducimos
el nombre del modelo dentro de mongoose y luego hacemos referencia
al esquema*/

const GameShop = mongoose.model("GameShop", GameShopSchema);

module.exports = GameShop;
//Exportamos el modelo de GameShop para permitir realizar gestiones en él

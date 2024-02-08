const mongoose = require("mongoose");

/* Schema --> Es como un template en una base de datos.
Es una colección lógica organizada de objetos de base de datos como
tablas, funciones...*/

/* Creamos un nuevo Schema de los productos que venden las tiendas.

Creamos un nuevo Schema de empresas/tiendas que venden productos
(principalmente juegos) con la librería mongoose que interactúa con Mongo DB. 
Tiene una nueva función a la que le pasamos un objeto con diferentes 
claves y atributos. */

const ProductSchema = new mongoose.Schema({ name: String }); //!Puede ser que por esto  no haga link?
//Define el esquema del producto, a través de un array String.

/* Creo un nuevo Schema del producto(videojuego) con la librería mongoose 
que interactúa con Mongo DB. */
const GameShopSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    products: [ProductSchema], //el array de products
    favourite: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    yearFounded: { type: Number, required: true },
    headquartersLocation: { type: String, required: true },
    image: {
      type: String,
      required: true,
    },
    Product: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }], //!Lo necesito?
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
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

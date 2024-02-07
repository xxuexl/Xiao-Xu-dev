const mongoose = require("mongoose");

//Define el esquema de la plataforma del juego, a través de un array String.
//const PlatformSchema = new mongoose.Schema({ name: String });

/* Creo un nuevo Schema del producto(videojuego) con la librería mongoose 
que interactúa con Mongo DB. */
const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    genre: { type: String, required: true },
    //platforms: {[PlatformSchema]}, //El array que representa en cuántas platforms está el juego.
    platforms: {
      type: String,
      enum: ["Xbox", "Play 4", "Play 5", "Nintendo Switch"],
    },
    price: { type: Number, required: true },
    gameStudio: { type: String, required: true },
    yearReleased: { type: Number, required: true },
    favourite: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    image: {
      type: String,
      required: true,
    },
    GameShop: [{ type: mongoose.Schema.Types.ObjectId, ref: "GameShop" }],
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

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

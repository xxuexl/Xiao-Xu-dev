// Se importa el modelo
const Product = require("../models/Product.model");

//? -------------------------------POST create --------------------------

const createProduct = async (req, res, next) => {
  try {
    await Product.syncIndexes();
    // Hace que los Indexes de este esquema Product existan en Mongo DB

    /* Hacemos el cuerpo de la request. Se crea un nuevo object el customBody.
    1º Si en el request body está presente name, se le pide guardarlo dentro 
    de la clave name, y así con todas las demás claves */
    const customBody = {
      name: req.body?.name,
      genre: req.body?.genre,
      platforms: req.body?.platforms,
      price: req.body?.price,
      gameStudio: req.body?.gameStudio,
      yearReleased: req.body?.yearReleased,
      favourite: req.body?.favourite,
    };
    const newProduct = new Product(customBody);
    /*Creo un nuevo modelo usando el template de Product y le paso
    todo el cuerpo del request del customBody*/

    const savedProduct = await newProduct.save();
    /* Empleo el save method del nuevo modelo de Product para guardar toda
    la información en la BD, con await solicito que espere a que la función se 
    ejecuta correctamente */

    /*Devuelve una respuesta. El cliente(Insomnia) lo requiere.
    .status -> Si el Product se ha guardado bien en BD, devuelve un status de 200(OK).
    Si no se ha guardado correctamente, devuelve status de 404 (Page not found).

    .json -> Si el Product se ha guardado bien, devuelve lo que se ha guardado.
    Si no, devuelve un mensaje de error */
    return res
      .status(savedProduct ? 200 : 404)
      .json(savedProduct ? savedProduct : "Error creating the Product");
  } catch (error) {
    return res.status(404).json({
      error: "Error catch creating the Product",
      message: error.message, // Comunica info sobre el error que se capturó
    });
  }
};

module.exports = { createProduct };

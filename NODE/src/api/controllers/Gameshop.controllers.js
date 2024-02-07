const { deleteImgCloudinary } = require("../../middleware/files.middleware");
// Se importa el modelo
const GameShop = require("../models/Gameshop.model");

//? -------------------------------POST create --------------------------

const createGameShop = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    await GameShop.syncIndexes();
    // Hace que los Indexes de este esquema GameShop existan en Mongo DB

    /* Hacemos una instancia del modelo, el cuerpo de la request. 
    Se crea un nuevo object el customBody.
    1º Si en el request body está presente name, se le pide guardarlo dentro 
    de la clave name, y así con todas las demás claves */
    /*const customBody = {
      name: req.body?.name,
      type: req.body?.type,
      products: req.body?.products,
      favourite: req.body?.favourite,
      yearFounded: req.body?.yearFounded,
      headquartersLocation: req.body?.headquartersLocation,
    };*/
    const newGameShop = new GameShop({ ...req.body, image: catchImg });
    /*Creo un nuevo modelo usando el template de GameShop y le paso
    todo el cuerpo del request del customBody*/

    const savedGameShop = await newGameShop.save();
    /* Empleo el save method del nuevo modelo de GameShop para guardar toda
    la información en la BD, con await solicito que espere a que la función se 
    ejecuta correctamente */

    /*Devuelve una respuesta, el cliente(Insomnia) lo requiere.
    .status -> Si el GameShop se ha guardado bien en BD, devuelve un status de 200(OK).
    Si no se ha guardado correctamente, devuelve status de 404 (Page not found).

    .json -> Si el GameShop se ha guardado, devuelve lo que se ha guardado.
    Si no, devuelve un mensaje de error */
    return res
      .status(savedGameShop ? 200 : 404)
      .json(savedGameShop ? savedGameShop : "Error creating the Game Shop");
  } catch (error) {
    deleteImgCloudinary(catchImg);
    return res.status(404).json({
      error: "Error catch creating the Game Shop",
      message: error.message, // Comunica info sobre el error que se capturó
    });
  }
};

module.exports = { createGameShop };

// Se importa el modelo y middleware de Img

const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Product = require("../models/Product.model");
const GameShop = require("../models/Gameshop.model");

//? -------------------------------POST create --------------------------

const createGameShop = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    await GameShop.syncIndexes();
    // Hace que los Indexes de este esquema GameShop existan en Mongo DB

    /*  OLD VERSION NO WORKING WITH IMG
     Hacemos una instancia del modelo, el cuerpo de la request. 
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
    todo el cuerpo del request del body e img*/

    const savedGameShop = await newGameShop.save();
    /* Empleo el save method del nuevo modelo de GameShop para guardar toda
    la información en la BD, con await solicito que espere a que la función se 
    ejecuta correctamente */

    /*Devuelve una respuesta, el cliente(Insomnia) lo requiere.
    .status -> Si el GameShop se ha guardado bien en BD, devuelve un status de 200(OK).
    Si no se ha guardado correctamente, devuelve status de 404 (Page not found).


      //-----------------TEST EN RUNTIME----------------------------------
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

//? ---------------------------ADD & DELETE products-------------------

// Metemos los personajes en el array del modelo
const toggleProduct = async (req, res, next) => {
  try {
    /* Este "id" es el id que vamos a actualizar */
    const { id } = req.params;
    const { products } = req.body;
    /* ---> Por el body voy a recibir todos los ID de los products 
    que quiero meter en ese array.
    Enviamos esto por el req.body "12412242253,12535222232,12523266346" */

    const GameShopById = await GameShop.findById(id);

    /* Se hace un condicional para saber si existe.
     Se hace la update, si no, mandamos un 404 */
    if (GameShopById) {
      /** Promise.all --> Conjunto de promesas.
       *  Completa todas las promesas y asincronías que tiene
       * dentro y luego continúa con el proceso.
       * Se recorre este array de los Id de los products*/
      //! YO NO NECESITO EMPLEAR SPLIT PORQUE YO TENGO PRODUCTS(REQ.BODY) COMO UN ARRAY.
      Promise.all(
        products.map(async (product, index) => {
          //! PONGO PRODUCTS EN SU LUGAR Y HAGO UN MAP, BUSCA EN UN ARRAY.
          if (GameShopById.products.includes(product)) {
            /*Se borra con findByIdAndUpdate.Se le pasa el Id y se le solicita
            que saque (pull) del array products*/
            try {
              await GameShop.findByIdAndUpdate(id, {
                // En clave "products" sacará Id del elemento que estoy recorriendo
                $pull: { products: product },
              });

              try {
                //Busca por ID este product y realiza un pull
                await Product.findByIdAndUpdate(product, {
                  $pull: { gameshop: id }, //? EN SINGULAR
                });

                /* Después de todos estos try catch anidados se pone la respuesta*/
              } catch (error) {
                res.status(404).json({
                  error: "error update product",
                  message: error.message, //da más info
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update game shop",
                message: error.message,
              }) && next(error);
            }
          } else {
            /* Si no lo incluye lo tenemos que meter --> $push */

            try {
              await GameShop.findByIdAndUpdate(id, {
                $push: { products: product },
              });
              try {
                await Product.findByIdAndUpdate(product, {
                  $push: { gameshop: id }, //? EN SINGULAR
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update product",
                  message: error.message,
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update game shop",
                message: error.message,
              }) && next(error);
            }
          }
        })
      )
        .catch((error) => res.status(404).json(error.message))

        /*La respuesta de un promise.all se lanza con "then".
        Tras finalizar las 2 asincronías previas se solicita que...
        1 -> Mande una respuesta con 200 con la movie actualizada
        para comprobar que los products se metieron.*/
        .then(async () => {
          return res.status(200).json({
            dataUpdate: await GameShop.findById(id).populate("products"),
          }); // populate - Sacar información de esos Ids.
        });
    } else {
      return res.status(404).json("esta tienda no existe");
    }
  } catch (error) {
    return (
      res.status(404).json({
        error: "error catch",
        message: error.message,
      }) && next(error)
    );
  }
};

module.exports = { createGameShop, toggleProduct };

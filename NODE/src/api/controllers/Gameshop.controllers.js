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

//! ---------------------------------------------------------------------
//? -------------------------------get by id --------------------------
//! ---------------------------------------------------------------------
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const gameShopById = await GameShop.findById(id);
    if (gameShopById) {
      return res.status(200).json(gameShopById);
    } else {
      return res.status(404).json("no se ha encontrado el gameShop");
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
//! ---------------------------------------------------------------------
//? -------------------------------get all ------------------------------
//! ---------------------------------------------------------------------

const getAll = async (req, res, next) => {
  try {
    const allGameShops = await GameShop.find().populate("products");
    /** el find nos devuelve un array */
    if (allGameShops.length > 0) {
      return res.status(200).json(allGameShops);
    } else {
      return res.status(404).json("no se han encontrado gameShops");
    }
  } catch (error) {
    return res.status(404).json({
      error: "error al buscar - lanzado en el catch",
      message: error.message,
    });
  }
};

//! ---------------------------------------------------------------------
//? -------------------------------get by name --------------------------
//! ---------------------------------------------------------------------
const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;

    /// nos devuelve un array de elementos
    const gameShopByName = await GameShop.find({ name });
    if (gameShopByName.length > 0) {
      return res.status(200).json(gameShopByName);
    } else {
      return res.status(404).json("no se ha encontrado");
    }
  } catch (error) {
    return res.status(404).json({
      error: "error al buscar por nombre capturado en el catch",
      message: error.message,
    });
  }
};

//! ---------------------------------------------------------------------
//? -------------------------------UPDATE -------------------------------
//! ---------------------------------------------------------------------

const update = async (req, res, next) => {
  await GameShop.syncIndexes();
  let catchImg = req.file?.path;
  try {
    const { id } = req.params;
    const gameShopById = await GameShop.findById(id);
    if (gameShopById) {
      const oldImg = gameShopById.image;

      const customBody = {
        _id: gameShopById._id,
        image: req.file?.path ? catchImg : oldImg,
        name: req.body?.name ? req.body?.name : gameShopById.name,
      };

      if (req.body?.gender) {
        const resultEnum = enumOk(req.body?.gender);
        customBody.gender = resultEnum.check
          ? req.body?.gender
          : gameShopById.gender;
      }

      try {
        await GameShop.findByIdAndUpdate(id, customBody);
        if (req.file?.path) {
          deleteImgCloudinary(oldImg);
        }

        //** ------------------------------------------------------------------- */
        //** VAMOS A TESTEAR EN TIEMPO REAL QUE ESTO SE HAYA HECHO CORRECTAMENTE */
        //** ------------------------------------------------------------------- */

        // ......> VAMOS A BUSCAR EL ELEMENTO ACTUALIZADO POR ID

        const gameShopByIdUpdate = await GameShop.findById(id);

        // ......> me cojer el req.body y vamos a sacarle las claves para saber que elementos nos ha dicho de actualizar
        const elementUpdate = Object.keys(req.body);

        /** vamos a hacer un objeto vacion donde meteremos los test */

        let test = {};

        /** vamos a recorrer las claves del body y vamos a crear un objeto con los test */

        elementUpdate.forEach((item) => {
          if (req.body[item] === gameShopByIdUpdate[item]) {
            test[item] = true;
          } else {
            test[item] = false;
          }
        });

        if (catchImg) {
          gameShopByIdUpdate.image === catchImg
            ? (test = { ...test, file: true })
            : (test = { ...test, file: false });
        }

        /** vamos a ver que no haya ningun false. Si hay un false lanzamos un 404,
         * si no hay ningun false entonces lanzamos un 200 porque todo esta correcte
         */

        let acc = 0;
        for (clave in test) {
          test[clave] == false && acc++;
        }

        if (acc > 0) {
          return res.status(404).json({
            dataTest: test,
            update: false,
          });
        } else {
          return res.status(200).json({
            dataTest: test,
            update: true,
          });
        }
      } catch (error) {}
    } else {
      return res.status(404).json("este gameShop no existe");
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};

//! ---------------------------------------------------------------------
//? -------------------------------DELETE -------------------------------
//! ---------------------------------------------------------------------

const deleteGameShop = async (req, res, next) => {
  try {
    const { id } = req.params;
    const gameShop = await GameShop.findByIdAndDelete(id);
    if (gameShop) {
      // lo buscamos para vr si sigue existiendo o no
      const finByIdGameShop = await GameShop.findById(id);

      try {
        const test = await Movie.updateMany(
          { gameShops: id },
          { $pull: { gameShops: id } }
        );
        console.log(test);

        try {
          await User.updateMany(
            { gameShopsFav: id },
            { $pull: { gameShopsFav: id } }
          );

          return res.status(finByIdGameShop ? 404 : 200).json({
            deleteTest: finByIdGameShop ? false : true,
          });
        } catch (error) {
          return res.status(404).json({
            error: "error catch update User",
            message: error.message,
          });
        }
      } catch (error) {
        return res.status(404).json({
          error: "error catch update Movie",
          message: error.message,
        });
      }
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = { createGameShop, toggleProduct, getById, getAll, getByName };

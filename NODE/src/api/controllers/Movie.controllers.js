const Character = require("../models/Character.model");
const Movie = require("../models/Movie.model");

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ++++++++++++++++++++++++++-------C R U D--------+++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
//! ---------------------------------------------------------------------
//? -------------------------------POST create --------------------------
//! ---------------------------------------------------------------------

const createMovie = async (req, res, next) => {
  try {
    await Movie.syncIndexes();

    /** hacemos una instancia del modelo  */
    const customBody = {
      name: req.body?.name,
      year: req.body?.year,
    };
    const newMovie = new Movie(customBody);
    const savedMovie = await newMovie.save();

    // test en el runtime
    return res
      .status(savedMovie ? 200 : 404)
      .json(savedMovie ? savedMovie : "error al crear la movie");
  } catch (error) {
    return res.status(404).json({
      error: "error catch create movie",
      message: error.message,
    });
  }
};

//! ---------------------------------------------------------------------
//? ----------------------------add o delete un character  --------------
//! ---------------------------------------------------------------------

// Metemos los personajes en el array del modelo de "Movie"
const toggleCharacter = async (req, res, next) => {
  try {
    /* Este "id" es el id de la Movie que vamos a actualizar */
    const { id } = req.params;
    const { characters } = req.body;
    /* ---> Por el body voy a recibir todos los ID de los Characters 
    que quiero meter en ese array.
    Enviamos esto por el req.body "12412242253,12535222232,12523266346" */

    /* Se busca la movie por Id para saber si existe */
    const movieById = await Movie.findById(id);

    /* Se hace un condicional para saber si existe.
     Se hace la update, si no, mandamos un 404 */
    if (movieById) {
      /** El método "split" separa por las comas El string de req.body.
       * de la parte superior. "split" creará un array con los Id.  */

      const arrayIdCharacters = characters.split(",");

      /** Promise.all --> Completa todas las promesas y asincronías que tiene
       * dentro y luego continúa con el proceso.
       * Se recorre este array de los Id de los Characters que hemos creado
       * y se comprueba si...
       *
       * Con "includes" analizamos si "x" Character está incluido en la Movie.
       * 1) Si lo incluye ----> Saca character si está en back
       * 2) Si no lo incluye ----> Meterlo si no está en back   */

      Promise.all(
        arrayIdCharacters.map(async (character, index) => {
          if (movieById.characters.includes(character)) {
            /* En caso de que incluya el Character, hay que borrar del array el 
            personaje dentro de la movie */

            /*Se borra con findByIdAndUpdate.Se le pasa el Id y se le solicita
            que saque (pull) del array Characters, el personaje en particular*/
            try {
              await Movie.findByIdAndUpdate(id, {
                // En clave "characters" sacará Id del elemento que estoy recorriendo
                $pull: { characters: character },
              });

              try {
                //Busca por ID este character y realiza un pull del array de la movie
                await Character.findByIdAndUpdate(character, {
                  $pull: { movies: id },
                });

                /* Después de todos estos try catch anidados se pone la respuesta*/
              } catch (error) {
                res.status(404).json({
                  error: "error update character",
                  message: error.message, //da más info
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update movie",
                message: error.message,
              }) && next(error);
            }
          } else {
            //*************************************************************************** */
            //________ METER EL PERSONAJE EN EL ARRAY DE PERSONAJES DE LA MOVIE_____________
            //*************************************************************************** */
            /* Si no lo incluye lo tenemos que meter --> $push */

            try {
              await Movie.findByIdAndUpdate(id, {
                $push: { characters: character },
              });
              try {
                await Character.findByIdAndUpdate(character, {
                  $push: { movies: id },
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update character",
                  message: error.message,
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update movie",
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
        para comprobar que los characters se metieron.*/
        .then(async () => {
          return res.status(200).json({
            dataUpdate: await Movie.findById(id).populate("characters"),
          }); // populate - Sacar información de esos Ids.
        });
    } else {
      return res.status(404).json("esta pelicula no existe");
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

module.exports = { createMovie };

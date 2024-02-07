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

module.exports = { createMovie };

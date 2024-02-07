const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    year: { type: Number, required: true },
    characters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Character" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    //Empleamos el array de objetos, de diferentes Ids de los elementos

    //2º opción solo object:    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;

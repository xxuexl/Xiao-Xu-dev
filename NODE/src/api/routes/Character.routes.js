const { upload } = require("../../middleware/files.middleware");
const {
  create,
  getById,
  getAll,
  getByName,
  update,
  deleteCharacter,
} = require("../controllers/Character.controllers");

const CharacterRoutes = require("express").Router();

/*Se hará upload de una única image, y se guardará como "image", posteriormente
se mete el create de controllers. */
CharacterRoutes.post("/", upload.single("image"), create);
CharacterRoutes.get("/:id", getById);
CharacterRoutes.get("/", getAll);
CharacterRoutes.get("/byName/:name", getByName);
CharacterRoutes.patch("/:id", upload.single("image"), update);
CharacterRoutes.delete("/:id", deleteCharacter);

module.exports = CharacterRoutes;

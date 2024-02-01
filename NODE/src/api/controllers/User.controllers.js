/* Los controladores consumen modelos.
1º Nos traemos la parte de borrado de imagen.
2º Nos traemos el User y el randomCode */
//!-----------------Middleware-----------------------------------------------
const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const User = require("../models/User.model");
const randomCode = require("../../utils/randomCode");

//! ------------------------------librerias--------------------------------
//Vamos a utilizar librerias: Validator, Nodemeailer par mandar correo electrónicos y bcrypt:

const nodemailer = require("nodemailer");
const validator = require("validator");
const bcrypt = require("bcrypt");

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
//! -----------------------------------------------------------------------------
//? --------CREATE DE CRUD------------------REGISTER LARGO EN CODIGO ------------------------
//! -----------------------------------------------------------------------------
//------------------->CRUD es el acrónimo de "Crear, Leer, Actualizar y Borrar"
/* Se crea una funcion asíncrona. Esta estructura es siempre igual*/
const registerLargo = async (req, res, next) => {
  /*Esta estructura es siempre igual
  1º -captura la imagen que previamente hemos subido en el middleaware */

  let catchImg =
    req.file?.path; /* Vamos a capturar la mimg que subimos previamente .
   Si no está la img subida, continúa. el optional chaining es para que no rompa en caso de no haber path. 
   Cuando a un objeto le falta un valor, permite continuar */
  // el path es la url de cloudinary.
  //Capturo errores con async/wait
  try {
    /*Se mete un try catch por cada asincronía que tengamos de actualizacion.
     *Para seleccionar errores de forma separada.
     *
     *Asincronías de lectura - No necesitan que tengan un try catch por cada una de ellas.
     */

    /*Se sincronizan los index(están dentro del modelo de la bd) de los elementos "unique".
    Sincroniza los index de manera correcta al modelo */
    await User.syncIndexes(); //A la espera del back,
    let confirmationCode = randomCode(); //Utilizamos el randomCode
    const { email, name } = req.body; /* BODY-  Es el cuerpo
    de la request es lo que yo envío. lo que enviamos por la parte del body de la request
    Para sacar el email y el nombre (las claves) del objeto que es la request. */
    // vamos a buscar al usuario par ver si existe.
    const userExist = await User.findOne(
      //Encuentrame un User que coincida o bien en el email o el name
      { email: req.body.email },
      { name: req.body.name }
    );

    if (!userExist) {
      //! -----USER NO EXISTE--------LO REGISTRAMOS PORQUE NO HAY COINCIDENCIAS CON UN USER INTERNO
      const newUser = new User({ ...req.body, confirmationCode });
      // Spread operator, los datos que necesito para crear el nuevo usuario.
      // EL USER HA METIDO IMAGEN ???
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        newUser.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
      } //Si no tiene img, ponemos esta img

      //! SI HAY UNA NUEVA ASINCRONIA DE CREAR O ACTUALIZAR HAY QUE METER OTRO TRY CATCH
      try {
        const userSave =
          await newUser.save(); /* Cogemos lo que hemos creado,y lo guardamos. Le hago una nueva
        constante a ese guardado*/
        return res.status(200).json({ data: userSave });
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {
      ///! -------> cuando ya existe un usuario con ese email y ese name
      if (req.file) deleteImgCloudinary(catchImg);
      // como ha habido un error la imagen previamente subida se borra de cloudinary
      return res.status(409).json("this user already exist");
    }
  } catch (error) {
    // SIEMPRE QUE HAY UN ERROR GENERAL TENEMOS QUE BORRAR LA IMAGEN QUE HA SUBIDO EL MIDDLEWARE
    if (req.file) deleteImgCloudinary(catchImg);
    return next(error);
  }
};

module.exports = { registerLargo };

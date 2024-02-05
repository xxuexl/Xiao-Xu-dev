/* Los controladores consumen modelos.
1º Nos traemos la parte de borrado de imagen.
2º Nos traemos el User y el randomCode */
//!-----------------Middleware-----------------------------------------------
const { deleteImgCloudinary } = require("../../middleware/files.middleware");

//! ---------------------------- modelos ----------------------------------
const User = require("../models/User.model");

//! ---------------------------- utils ----------------------------------
const randomCode = require("../../utils/randomCode");
const sendEmail = require("../../utils/sendEmail");
const { generateToken } = require("../../utils/token");
//! ------------------------------librerias--------------------------------
//Vamos a utilizar librerias: Validator, Nodemeailer par mandar correo electrónicos y bcrypt:

const nodemailer = require("nodemailer");
const validator = require("validator");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const {
  setTestEmailSend,
  getTestEmailSend,
} = require("../../state/state.data");
dotenv.config();

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
      //Ya tenemos el _id del user
      //Tiene que aparecer lo que requiere el modelo. Ej: En name se pone name.
      // Spread operator, los datos que necesito para crear el nuevo usuario.
      // EL USER HA METIDO IMAGEN ???
      if (req.file) {
        newUser.image = req.file.path; //path: url de Cloudinary, subido previamente a traves del middleware
      } else {
        newUser.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
      } //Si no tiene img, ponemos esta img por defecto

      //! SI HAY UNA NUEVA ASINCRONIA DE CREAR O ACTUALIZAR HAY QUE METER OTRO TRY CATCH
      try {
        const userSave =
          await newUser.save(); /* Cogemos lo que hemos creado,y lo sube y guarda. Le hago una nueva
        constante a ese guardado.*/
        //---> ENVIAR EL CÓDIGO CON NODEMAILER, SE ENVIA AL USER EL CONFIRMATION CODE.
        if (userSave) {
          // ---------------------------> ENVIAR EL CODIGO CON NODEMAILER --------------------
          const emailEnv = process.env.EMAIL;
          const password = process.env.PASSWORD;

          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: emailEnv,
              pass: password,
            },
          });

          const mailOptions = {
            from: emailEnv,
            to: email,
            subject: "Confirmation code",
            text: `tu codigo es ${confirmationCode}, gracias por confiar en nosotros ${name}`,
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              return res.status(404).json({
                user: userSave,
                confirmationCode: "error, resend code",
              });
            }
            console.log("Email sent: " + info.response);
            return res.status(200).json({
              user: userSave,
              confirmationCode,
            });
          });
        }
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

//! -----------------------------------------------------------------------------
//? ----------------------------REGISTER CORTO EN CODIGO ------------------------
//! -----------------------------------------------------------------------------

/*Se crea una función asíncrona llamada "registerWithRedirect" que toma 3
param. 
req = solicitud. res = respuesta. next = próxima función de middleware

Se declara variable "catchImg" y se le asigna la ruta del archivo si
existe en el objeto req. Con operador ? se evita que genere error.*/

const register = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    await User.syncIndexes(); //Genera un código de confirmación aleatorio.
    let confirmationCode = randomCode();
    const { email, name } = req.body;

    /*Busca en bd un usuario con el email y el nombre especificados. 
    Espera el resultado para asegurarse de que la operación asincrónica
    se complete antes de continuar. */

    const userExist = await User.findOne(
      { email: req.body.email },
      { name: req.body.name }
    );
    /*Verifica si no existe un usuario con 
      el correo electrónico y el nombre especificados.
      Si usuario no existe crea una nueva instancia de dicho usuario*/
    if (!userExist) {
      const newUser = new User({ ...req.body, confirmationCode });
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        newUser.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
      }
      /* Si usuario no tiene img se meterá la img por defecto*/

      //Se crea una nueva asincronía de guardado
      try {
        const userSave = await newUser.save();
        /* Si se ha guardado usuario, se llama a la función "sendEmail" y
        le envío elm */
        if (userSave) {
          sendEmail(email, name, confirmationCode);
          /*Es necesario un Timeout(asicronía). Hasta que función "sendEmail" no finalice,
        no empezará lo siguiente*/
          setTimeout(() => {
            if (getTestEmailSend()) {
              //Se comprueba qué estado tiene.
              /*El estado ya utilizado se reinicializa a false y devuelve 
              un 200.
              */
              setTestEmailSend(false);
              return res.status(200).json({
                user: userSave,
                confirmationCode,
              });
            } else {
              /*Se resetea estado a false y se envía un 404, que hay un error
              y que se reenvíe el código.*/
              setTestEmailSend(false);
              return res.status(404).json({
                user: userSave,
                confirmationCode: "error, resend code",
              });
            }
          }, 1100); //Time out entre 1100 y 1400 milisecs.
        }
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {
      if (req.file) deleteImgCloudinary(catchImg);
      return res.status(409).json("this user already exist");
    }
  } catch (error) {
    if (req.file) deleteImgCloudinary(catchImg);
    return next(error);
  }
};

//! -----------------------------------------------------------------------------
//? ----------------------------REGISTER CON REDIRECT----------------------------
//! -----------------------------------------------------------------------------
/*Se crea una función asíncrona llamada "registerWithRedirect" que toma 3
param. 
req = solicitud. res = respuesta. next = próxima función de middleware
Se declara variable "catchImg" y se le asigna la ruta del archivo si
existe en el objeto req. Con operador ? se evita que genere error.*/

const registerWithRedirect = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    await User.syncIndexes();
    let confirmationCode = randomCode(); //Genera un código de confirmación aleatorio.
    const userExist = await User.findOne(
      { email: req.body.email },
      { name: req.body.name }
    );
    /*Busca en bd un usuario con el email y el nombre especificados. 
    Espera el resultado para asegurarse de que la operación asincrónica
    se complete antes de continuar. */

    if (!userExist) {
      /*Verifica si no existe un usuario con el correo electrónico y el nombre especificados. */
      const newUser = new User({ ...req.body, confirmationCode });
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        newUser.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
      }

      try {
        const userSave = await newUser.save();
        const PORT = process.env.PORT;
        if (userSave) {
          return res.redirect(
            303,
            `http://localhost:${PORT}/api/v1/users/register/sendMail/${userSave._id}`
          );

          /*Esta Url he de configurarla yo. Esta ruta me llevará a la const de "sendCode"*/
        }
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {
      if (req.file) deleteImgCloudinary(catchImg);
      return res.status(409).json("this user already exist");
    }
  } catch (error) {
    if (req.file) {
      deleteImgCloudinary(catchImg);
    }
    return next(error);
  }
};

//! -----------------------------------------------------------------------------
//? ------------------CONTROLADORES QUE PUEDEN SER REDIRECT --------------------
//! ----------------------------------------------------------------------------

//!!! esto quiere decir que o bien tienen entidad propia porque se llaman por si mismos por parte del cliente
//! o bien son llamados por redirect es decir son controladores de funciones accesorias

const sendCode = async (req, res, next) => {
  try {
    /* Se hace un destructuring de "id". Se saca el param que hemos recibido por la ruta:
    La ruta: http://localhost:${PORT}/api/v1/users/register/sendMail/${userSave._id} */

    const { id } = req.params;

    /*Tomamos ese id para  BUSCAR EL USER POR ID para tener el email y el 
    codigo de confirmacion.
    findById query busca por id.*/
    const userDB = await User.findById(id);

    /// ------------------> envio el codigo
    const emailEnv = process.env.EMAIL;
    const password = process.env.PASSWORD;

    //Se crea el transporte
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailEnv,
        pass: password,
      },
    });

    //Se crean las mismas opciones de envío
    const mailOptions = {
      from: emailEnv,
      to: userDB.email,
      subject: "Confirmation code",
      text: `tu codigo es ${userDB.confirmationCode}, gracias por confiar en nosotros ${userDB.name}`,
    };
    //Se realiza el transport. Si hay error mando un return de 404 con el user y confirm code.
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.status(404).json({
          user: userDB,
          confirmationCode: "error, resend code",
        });

        //Si no hay error mando un return de 200 con el user y confirm code.
      }
      console.log("Email sent: " + info.response);
      return res.status(200).json({
        user: userDB,
        confirmationCode: userDB.confirmationCode,
      });
    });
  } catch (error) {
    return next(error);
  }
};

//!-------------------------------LOG IN------------------------------------------------------------------------------
const login = async (req, res, next) => {
  try {
    // nos traemos
    const { email, password } = req.body;
    const userDB = await User.findOne({ email });

    if (userDB) {
      // comparamos la contrase del body con la del user de la DB
      if (bcrypt.compareSync(password, userDB.password)) {
        // si coinciden generamos el token
        const token = generateToken(userDB._id, email);
        // mandamos la respuesta con el token
        return res.status(200).json({
          user: userDB,
          token,
        });
      } else {
        return res.status(404).json("password dont match");
      }
    } else {
      return res.status(404).json("User no register");
    }
  } catch (error) {
    return next(error);
  }
};

//! -----------------------------------------------------------------------------
//? -----------------------RESEND CODE -----------------------------
//! -----------------------------------------------------------------------------
/* Para envíar emails y códigos se necesita la 
librería "Nodemailer", también nos traemos el email y password
try -> scope de bloque.  */
const resendCode = async (req, res, next) => {
  try {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    /*Hay que hacer el "transporter" ya que nos permite mandar el 
correo. Indica el servicio que tiene y la autenticación ara enviar correo.*/
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: password,
      },
    });
    /* Se comprueba que User exista. Si no existe no se hace verificación. Se emplea
la Query "findOne" el cual buscará el email de req.body.email. //Mail options*/
    const userExists = await User.findOne({ email: req.body.email });
    // Desde nuestro email al email del req.body.email con asunto de Conf. code junto a texto.
    if (userExists) {
      const mailOptions = {
        from: email,
        to: req.body.email,
        subject: "Confirmation code",
        text: `tu codigo es ${userExists.confirmationCode}`,
      };
      /* Siguiente paso: Realizar método "sendMail" en el transporte, 
    que envía email. 
    "sendEmail" recibe opciones y contiene una 
    callback con 2 param (error e info) que se ejecuta dentro de 
    un función*/

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error); //Se envía la info por console log al front
          return res.status(404).json({
            resend: false,
          });
          /*Si hay error, retorna 404 como que el resend está en false y 
          se saca por consola*/
        } else {
          console.log("Email sent: " + info.response);
          return res.status(200).json({
            resend: true,
          });
        }
      });
      /*En caso de else se ha enviado correo, en console se manda la info
          de la respuesta y se envía al front end un código 200 y un resend 
          que es true*/
    } else {
      //Si User not found mandar error 404
      return res.status(404).json("User not found");
    }
    /* El "catch" general se lanza casi siempre con "next". Con "next" se
  envían cosas que quiero guardar y analizar.
  Se importa el "setError"el cual recibe el código (500) y el 
  mensaje (si no hay el "error.message", con operador or emplea el otro) */
  } catch (error) {
    return next(setError(500, error.message || "Error general send code"));
  }
};

//! ------------------------------------------------------------------------
//? -------------------------- CHECK NEW USER------------------------------
//! ------------------------------------------------------------------------
// Se crea una función arrow asíncrona
const checkNewUser = async (req, res, next) => {
  try {
    //Se requiere de la req.body el email y código de confirmation(el User nos lo da)
    const { email, confirmationCode } = req.body;
    // Existe el User?
    const userExists = await User.findOne({ email });

    if (!userExists) {
      //!Si no existe----> Enviamos un 404 de que no se encuentra
      return res.status(404).json("User not found");
    } else {
      /*Necesitamos comprobar si el código que tenemos en el backend coincide con el del 
    usuario que recibimos por la req.body. Para ello se realiza esta condicional
    en el que se solicita que han de ser estrictamente iguales*/
      if (confirmationCode === userExists.confirmationCode) {
        try {
          await userExists.updateOne({ check: true });
          /*New query "updateOne" ataca a un elemento en concreto. En este caso solicita
          userExists que actualice la clave check a true*/

          /* Si se ha actualizado algo tengo que volver a buscar el elemento actualizado.
        Creando updateUser.
        Se debe de hacer un test. Con "findOne" solicitamos que encuentre 1 por email.*/
          const updateUser = await User.findOne({ email });

          /* Una vez que el User ha sido encontrado se realiza el test.
          Paso un 200 y un test en el runtime. 
          Se le pregunta si el updateUser tiene true a través de un ternario.
          Si es true, mandará true y si no, mandará false.*/
          return res.status(200).json({
            testCheckOk: updateUser.check == true ? true : false,
          });
        } catch (error) {
          return res.status(404).json(error.message);
        }
      } else {
        try {
          /* Se introduce el modelo "User" con el método/query "findById...".
        Si el código está erróneo borrará a ese User de bd y lo mandamos al registro*/
          await User.findByIdAndDelete(userExists._id);

          //También se borrará la image en Cloudinary (añado el path the dicha img)
          deleteImgCloudinary(userExists.image);

          // Mando un 200 para confirmar que el User fue borrado.
          return res.status(200).json({
            userExists,
            check: false,

            /* Se realiza un test(runtime testing) con "delete" en el runtime (a tiempo real).
            Se solicita que busque ese User con ese id. Si el User es encontrado da
            la opción "?" que es que ha habido un error en borrar al User.
            Si no lo encuentras es ":", borrar el User. */
            delete: (await User.findById(userExists._id))
              ? "error delete user"
              : "ok delete user",
          });
        } catch (error) {
          return res //"res" es un middleware de express que siempre está antes de las respuestas
            .status(404)
            .json(error.message || "error general delete user");
        } //error.message da más información
      }
    }
  } catch (error) {
    /* Siempre en el catch devolvemos un 500, error general(Interval server error)
    Este error es específico para este controlador. El crasheo rojo del servidor es un error 500. */
    return next(setError(500, error.message || "General error check code"));
  }
};

module.exports = {
  registerLargo,
  register,
  sendCode,
  registerWithRedirect,
  login,
  resendCode,
};

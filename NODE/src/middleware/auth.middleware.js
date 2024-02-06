/*Para autentificación de usuarios.
veryfyToken para verificar token. Traemos dotenv porque lo 
vamos a utilizar Lo utilizamos y lo configuramos.*/

const User = require("../api/models/User.model");
const { verifyToken } = require("../utils/token");
const dotenv = require("dotenv");
dotenv.config();

// Se necesitan 2 middlewares: isAuth(normal) y isAuthAdmin(administrador)
const isAuth = async (req, res, next) => {
  /*Es un token de tipo bearer. Con replace, reemplazo con un string vacío. 
  Se recibe de headers, por la parte de authorization. Todo esto se guarda en 
  la const token */
  const token = req.headers.authorization?.replace("Bearer ", "");

  /* Si no hay token: Se le manda este error de que no está autorizado. 
  Lo guardo en "next". */
  if (!token) {
    return next(new Error("Unauthorized"));
  }

  try {
    /* Si hay token: Vamos a decodificar el token para sacar el id. 
    Se verifica token (dentro de token.js está el método "jwt.verify", el cual recibe el
    token para decodificarlo y enviamos el JWT SECRET)*/

    const decoded = verifyToken(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    /*Solo se crea req.user cuando es un 
    endpoint autenticado ---> tiene como middleware el auth.
    Se crea un User que se está autenticando. Se crea una clave(user) en req en la que
    guardo los datos de ese User*/

    //Se crea el middleware de "next" para continuar.
    next();
  } catch (error) {
    return next(error);
  } //Si hay algún error se manda a consola
};

//Es lo mismo que isAuth pero con un añadido:
const isAuthAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    return next(new Error("Unauthorized"));
  }

  //Cuando se decodifica el token, sale el id y el email.
  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    console.log(decoded);
    //req.user SOLO SE CREA CON ESTE MIDDLEWARE
    req.user = await User.findById(decoded.id);
    // Se decodifica para crear req.user(user autenticado)

    //! -----> La unica diferencia es que comprobamos si es administrador
    /*Pongo un requisito más: Que sea Admin.
    Si no es Admin lanzo un error "No estás autorizado, no eres admin" */
    if (req.user.rol !== "admin") {
      return next(new Error("Unauthorized, not admin"));
    }
    next(); //Si es, continúa
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  isAuth,
  isAuthAdmin,
};

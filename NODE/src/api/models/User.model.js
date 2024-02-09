/* Los archivos de models son objetos. Siempre comienzan en mayúscula.
 Necesitamos 1º las importaciones, los elementos
 de cada librería que vamos a utilizar.*/
//  CREACION DE MODELO DE DATOS. Son consumidos por los controllers,

const bcrypt = require("bcrypt"); // para encryptar informacion
const validator = require("validator"); /// n os sirve para validad info
const mongoose = require("mongoose");

// Nombre en mayúscula. Oobjeto para definir los datos.
const UserSchema = new mongoose.Schema(
  // 1º Objeto vamos a tener la definicion de datos
  {
    email: {
      //1º clave de tipo String, es requerido(necesario), trim(quita espacios) y valida.
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: [validator.isEmail, "Email not valid"], // en caso de no ser un email valido
      // lanza el error ----> 'Email not valid'
    },
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: [validator.isStrongPassword], //minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
    },
    gender: {
      type: String,
      enum: ["hombre", "mujer", "otros"],
      required: true,
    },
    rol: {
      type: String,
      enum: [
        "admin",
        "user",
        "superadmin",
      ] /*enumeraciones permitidas y tiene un require*/,
      default: "user", // valor por defecto, el que menos perjudica la aplicación.
    },
    confirmationCode: {
      type: Number,
      required: true,
    },
    check: {
      //Para comprobar si el confirmationCode es correcto.
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
    }, //Subimos texto al backend, a cloudinary subimos una url y luego pasa a mongoose.
    // cuando relacionamos un modelo de con otro lo hacemos con populate y el ref a otro modelo
    gameShopsFav: [{ type: mongoose.Schema.Types.ObjectId, ref: "Gameshop" }],
    productsFav: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  },
  {
    timestamps: true,
  }
);
/*Necesito el this aquí. De este UserSchema antes de guardarlo, hazme un pre guardado.
 Con esta función encriptamos la contraseña. Que es
 una funcion asincrona. Coger la contraseña y la vas a hashear. 10 vueltas de encriptación, te la encripto
 y doy una vuelta 10 veces. No más de 10.*/
UserSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next(); //continuar al siguiente paso
    // el next es una forma de decirle a la api que continue, es un middleware que lanza errores al log o puede decir que continuemos
  } catch (error) {
    next("Error hashing password", error); //next se comunica con log. Se pasa con un error
  }
});

//De este esquema hay que crear un modelo. El nombre del modelo va en mayúscula 1º letra.
const User = mongoose.model("User", UserSchema); //Le ponemos un nombre al modelo relacionado a lo que queramos y se mete el esquema de datos
module.exports = User;
//Por ultimo se hace una exportacion sin llaves. solo quiero exportar la funcion

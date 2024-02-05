/* Crea un error, le mete el código y el mensaje y retorna
el error.
Este setError que se hace recibe un code y un mensaje */
const setError = (code, message) => {
  const error = new Error(); //Crea un error
  error.code = code;
  error.message = message; //Mete mensaje y retorna el error
  return error;
};
module.exports = setError;

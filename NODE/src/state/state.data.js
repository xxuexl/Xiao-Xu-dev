/* La funcion de get devuelve el estado actualmente
Las exportamos. El objeto tal cual no se exporta. Se exportan sus funciones*/

let testEmailSend = false;
//! Siempre que se consuma el estado tenemos que volver en el
//!controlador al final a su estado incial

const setTestEmailSend = (data) => {
  testEmailSend = data;
};

const getTestEmailSend = () => {
  return testEmailSend;
};

module.exports = { setTestEmailSend, getTestEmailSend };

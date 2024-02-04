let testEmailSend = false;
//! Siempre que se consuma el estado tenemos que volver en el
//!controlador al final a su estado incial

/* Función set recibe un param data y es metido en "testEmailSend*/
const setTestEmailSend = (data) => {
  testEmailSend = data;
};

/* Función get siempre igual. Devuelve/retorna el estado actual de "testEmailSend" */
const getTestEmailSend = () => {
  return testEmailSend;
};

//Se exportan ambas funciones set y get.
module.exports = { setTestEmailSend, getTestEmailSend };

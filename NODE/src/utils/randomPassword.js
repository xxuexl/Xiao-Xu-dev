/* Función que genera un núm por cada uno de los 
espacios de password. Cada "$" es cada uno de los símbolos de la
password. */

const randomPassword = () => {
  const randomString = "*@!=&$";
  const passwordSecure = `${Math.random().toString(36).slice(-4)}${
    randomString[Math.floor(Math.random() * 5)]
  }${randomString[Math.floor(Math.random() * 5)]}${Math.random()
    .toString(36)
    .slice(-4)
    .toUpperCase()}${randomString[Math.floor(Math.random() * 5)]}${
    randomString[Math.floor(Math.random() * 5)]
  }`;

  return passwordSecure; //Se genera la password
};

module.exports = randomPassword;

//**Iteración #1: Buscar el máximo**

//?---------------------------------------------------------------------------------------------
//Completa la función que tomando dos números como argumento devuelva el más alto.
//?---------------------------------------------------------------------------------------------

function sum(numberOne, numberTwo) {
  if (numberOne < numberTwo) {
    return numberTwo;
  } else {
    return numberOne;
  }
}

const result = sum(55, 49);
console.log(result);

//?---------------------------------------------------------------------------------------------
/**Iteración #2: Buscar la palabra más larga**

Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:*/
//?---------------------------------------------------------------------------------------------

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const findLongestWord = (arrayDeAvengers) => {
  let longestAvenger = 0;
  for (let i = 0; i < arrayDeAvengers.length; i++) {}
};

findLongestWord(avengers);

// NO ME SALE.

//?---------------------------------------------------------------------------------------------

/**Iteración #3: Calcular la suma**

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

Puedes usar este array para probar tu función:*/
//?---------------------------------------------------------------------------------------------

const numbers1 = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  // insert code
}

//?---------------------------------------------------------------------------------------------
/**Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:*/

const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  // insert code
}

//?---------------------------------------------------------------------------------------------

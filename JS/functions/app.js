//?-----------------------------------------------------------------------------------------------
//**Iteración #1: Buscar el máximo**
//Completa la función que tomando dos números como argumento devuelva el más alto.
//?-----------------------------------------------------------------------------------------------
console.log("Task 1.1:");

function sum(numberOne, numberTwo) {
  if (numberOne < numberTwo) {
    return numberTwo;
  } else {
    return numberOne;
  }
}

const result = sum(55, 49);
console.log(result);

//?-----------------------------------------------------------------------------------------------
/**Iteración #2: Buscar la palabra más larga**

Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:*/
//?------------------------------------------------------------------------------------------------
console.log("Task 1.2:");

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const nombreLargo = (array) => {
  let palabraLarga = " ";

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > palabraLarga.length) {
      palabraLarga = array[i];
    }
  }
  return palabraLarga;
};

console.log(nombreLargo(avengers));

//?-----------------------------------------------------------------------------------------------
/**Iteración #3: Calcular la suma**

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

Puedes usar este array para probar tu función:*/
//?------------------------------------------------------------------------------------------------
console.log("Task 1.3:");

const numbers1 = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numbers) {
  let suma = 0;
  for (let i = 0; i < numbers.length; i++) {
    suma += numbers[i];
  }
  return suma;
}

const resultado = sumAll(numbers1);
console.log(resultado);

//?------------------------------------------------------------------------------------------------
/**Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:*/
//?------------------------------------------------------------------------------------------------
console.log("Task 1.4:");

const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(array) {
  if (array.length === 0) {
    return 0;
  }
  const suma = array.reduce((acc, value) => acc + value, 0);
  const prom = suma / array.leng;
  return prom;
}

const resultadito = average(numbers2);
console.log(resultadito);

//?-------------------------------------------------------------------------------------------------
/**Iteración #5: Calcular promedio de strings**

Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario 
cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:*/
console.log("Task 1.5:");

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(mixedElements) {
  let numerit = 0;
  let letter = 0;
  for (let i = 0; i < mixedElements.length; i++) {
    if (typeof mixedElements[i] === "number") {
      numerit = mixedElements[i] + numerit;
    } else if (typeof mixedElements[i] === "string") {
      letter = mixedElements[i].length + letter;
    }
  }
  return numerit + letter;
}

let resultad = averageWord(mixedElements);
console.log(resultad);

//?--------------------------------------------------------------------------------------------------

//?--------------------------------------------------------------------------------------------------
/**Iteración #6: Valores únicos**

Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para 
retornar un array sin los elementos duplicados.Puedes usar este array para probar tu función:*/
//?---------------------------------------------------------------------------------------------------
console.log("Task 1.6:");

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
const newFoods = [];
duplicates.forEach((item) => {
  if (!newFoods.includes(item)) {
    newFoods.push(item);
  }
});
console.log(newFoods);

/* Se emplea "!" para convertirlo en negativo o lo contrario a ese statement. 
Con el método "includes" comprobamos si incluye dicho item. */
//?--------------------------------------------------------------------------------------------------
/**Iteración #7: Buscador de nombres**

Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - 
comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. 
Puedes usar este array para probar tu función:*/
//?---------------------------------------------------------------------------------------------------
console.log("Task 1.7:");

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function finderName(param) {
  // insert code
}

//?---------------------------------------------------------------------------------------------------
/**Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
 Puedes usar este array para probar tu función:*/
//?---------------------------------------------------------------------------------------------------
console.log("Task 1.8:");

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
function repeatCounter(param) {
  // insert code
}

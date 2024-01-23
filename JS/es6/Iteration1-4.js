//?-------------------------------------------------------------------------------------------------------
/**Iteración #1: Arrows**

Crea una arrow function que tenga dos parametros a y b y
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
por consola la suma de los dos parametros.
1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros*/
//?-------------------------------------------------------------------------------------------------------
console.log("Task 1.1:");

//1.1
const sum = (a = 10, b = 5) => a + b;
console.log(sum());

//1.2
console.log(sum(1));

//1.3
console.log(sum(4, 6));

//?-------------------------------------------------------------------------------------------------------
/**Iteración #2: Destructuring**

2.1 En base al siguiente javascript, crea variables en base a las propiedades
del objeto usando object destructuring e imprimelas por consola. Cuidado,
no hace falta hacer destructuring del array, solo del objeto.*/
//?-------------------------------------------------------------------------------------------------------
console.log("Task 2.1:");

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title, gender, year } = game;
console.log(
  `The title of this game is ${title}, the genders are ${gender}, and it´s from ${year}.`
);

//?-------------------------------------------------------------------------------------------------------
/*2.2 En base al siguiente javascript, usa destructuring para crear 3 variables
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.*/
//?-------------------------------------------------------------------------------------------------------
console.log("Task 2.2:");

const fruits = ["Banana", "Strawberry", "Orange"];

const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

//?-------------------------------------------------------------------------------------------------------
/*2.3 En base al siguiente javascript, usa destructuring para crear 2
variables igualandolo a la función e imprimiendolo por consola.*/

//?-------------------------------------------------------------------------------------------------------
console.log("Task 2.3:");

const animalFunction = () => {
  return { name2: "Bengal Tiger", race: "Tiger" };
};
const { name2, race } = animalFunction();
console.log(name2);
console.log(race);

//?-------------------------------------------------------------------------------------------------------
/*2.4 En base al siguiente javascript, usa destructuring para crear las
variables name y itv con sus respectivos valores. Posteriormente crea
3 variables usando igualmente el destructuring para cada uno de los años
y comprueba que todo esta bien imprimiendolo.*/
//?-------------------------------------------------------------------------------------------------------
console.log("Task 2.4:");

const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

const { name, itv } = car;

let itvYear = car.itv[0];
let itvYear2 = car.itv[1];
let itvYear3 = car.itv[2];
console.log(`The name of this car is ${name}, and the itv is ${itv}.`);
console.log(itvYear, itvYear2, itvYear3);

//?-------------------------------------------------------------------------------------------------------
/**Iteración #3: Spread Operator**

3.1 Dado el siguiente array, crea una copia usando spread operators.*/
//?-------------------------------------------------------------------------------------------------------
console.log("Task 3.1:");

const puntosLista = [32, 54, 21, 64, 75, 43];

const puntosListaCopia = [...puntosLista];
console.log(puntosListaCopia);

//?-------------------------------------------------------------------------------------------------------
//3.2 Dado el siguiente objeto, crea una copia usando spread operators.
//?-------------------------------------------------------------------------------------------------------
console.log("Task 3.2:");

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyCopia = { ...toy };
console.log(toyCopia);

//?-------------------------------------------------------------------------------------------------------
//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
//?-------------------------------------------------------------------------------------------------------
console.log("Task 3.3:");

const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const pointsListCopy = [...pointsList];
const pointsList2Copy = [...pointsLis2];
const allPointsList = [...pointsListCopy, ...pointsList2Copy];
console.log(allPointsList);

//?-------------------------------------------------------------------------------------------------------
/*3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
con spread operators.*/
//?-------------------------------------------------------------------------------------------------------
console.log("Task 3.4:");

const toys = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toysUpdate = {
  lights: "rgb",
  power: ["Volar like a dragon", "MoonWalk"],
};

const toysCopy = { ...toys };
const toysUpdateCopy = { ...toysUpdate };
const toysUpdated = { ...toysCopy, ...toysUpdateCopy };
console.log(toysUpdated);
//?-------------------------------------------------------------------------------------------------------
/*3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
pero sin editar el array inicial. De nuevo, usando spread operators.*/
//?-------------------------------------------------------------------------------------------------------
console.log("Task 3.5:");

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)];
console.log(colorsCopy);

//?-------------------------------------------------------------------------------------------------------
/**Iteración #4: Map**

4.1 Dado el siguiente array, devuelve un array con sus nombres
utilizando .map(). */
//?-------------------------------------------------------------------------------------------------------
console.log("Task 4.1:");

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const usernames = users.map((users) => users.name);
console.log(usernames);

//?-------------------------------------------------------------------------------------------------------
/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
empiece por 'A'.*/
//?---------------------------------------------------------------------------------------------------
console.log("Task 4.2:");

const users1 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
const userANames = users1.map((usersA) => {
  if (usersA.startsWith("A")) {
    return "Anacleto";
  }
  return usersA;
});

//ESTOY EN ELLO
//?---------------------------------------------------------------------------------------------------
/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y añade al valor de .name el string ' (Visitado)'
cuando el valor de la propiedad isVisited = true.*/
//?---------------------------------------------------------------------------------------------------
console.log("Task 4.3:");

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

//ESTOY CON ELLO
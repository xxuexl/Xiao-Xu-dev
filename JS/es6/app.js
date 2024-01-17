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

//?-------------------------------------------------------------------------------------------------------
